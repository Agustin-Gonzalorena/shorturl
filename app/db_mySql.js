import { redirect } from "next/navigation";
import mysql from "mysql2/promise";
import { cryptoRandomStringAsync } from "crypto-random-string";
import "dotenv/config";

/* const DEFAULT_CONFIG = {
  host: "localhost",
  user: "root",
  port: 3306,
  password: "poiu",
  database: "dbshorturl",
}; */
const connectionString = process.env.DATABASE_URL;

const connection = await mysql.createConnection(connectionString);

export async function redirectUrl(shorturl) {
  try {
    shorturl = shorturl.toLowerCase();
    const result = await connection.query(
      `SELECT * FROM link WHERE shorturl = ?`,
      [shorturl]
    );
    if (result[0].length == 0) {
      return false;
    }
    redirect("http://" + result[0][0].url);
  } catch (error) {
    console.error("Error redirecting URL:", error);
    throw error;
  }
}

export async function insert({ url }) {
  try {
    let shortUrl = await generateShortUrl();
    let result = await connection.query(
      `SELECT * FROM link WHERE shorturl = ?`,
      [shortUrl]
    );
    while (result[0].length > 0) {
      shortUrl = await generateShortUrl();
      result = await connection.query(`SELECT * FROM link WHERE shorturl = ?`, [
        shortUrl,
      ]);
    }

    await connection.query(`INSERT INTO link (url, shorturl) VALUES (?, ?)`, [
      url,
      shortUrl,
    ]);
    return { shortUrl: shortUrl, url: url };
  } catch (error) {
    console.error("Error inserting URL:", error);
    throw error;
  }
}

function generateShortUrl() {
  return cryptoRandomStringAsync({
    length: 5,
    characters: "abcdefghijklmnopqrstuvwxyz0123456789",
  });
}
