import { ref, get, set, getDatabase } from "firebase/database";
import { appDb } from "@/firebase.config";
import { redirect } from "next/navigation";
import { cryptoRandomStringAsync } from "crypto-random-string";

export async function redirectUrl(shorturl) {
  try {
    shorturl = shorturl.toLowerCase();
    const { dataArray } = await getData();
    let url = false;
    dataArray.forEach((e) => {
      if (e.code === shorturl) {
        url = e.url;
        return;
      }
    });
    if (url !== false) {
      redirect("http://" + url);
    } else {
      return false;
    }
  } catch (error) {
    console.error("Error redirecting URL:", error);
    throw error;
  }
}

export async function insert({ url }) {
  try {
    //buscar si existe el shorturl
    let shortUrl = await generateShortUrl();
    const { data, db } = await getData();
    let exits = false;
    data.forEach((element) => {
      if (element.code === shortUrl) {
        exits = true;
        return;
      }
    });
    while (exits) {
      shortUrl = await generateShortUrl();
      data.forEach((element) => {
        if (element.code === shortUrl) {
          exits = true;
          return;
        }
      });
    }
    //insertar
    set(ref(db, `results/${data.length}`), {
      code: shortUrl,
      url: url,
    });
    return { shortUrl: shortUrl, url: url };
  } catch (error) {
    console.error("Error inserting URL:", error);
    throw error;
  }
}
async function getData() {
  const db = getDatabase(appDb);
  const starCountRef = ref(db, `/results/`);
  const snapshot = await get(starCountRef);
  const data = await snapshot.val();
  //pasar valores de objeto a array
  const dataArray = Object.values(data);

  return { dataArray, db };
}
function generateShortUrl() {
  return cryptoRandomStringAsync({
    length: 5,
    characters: "abcdefghijklmnopqrstuvwxyz0123456789",
  });
}
