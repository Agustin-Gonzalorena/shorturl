import { NextResponse } from "next/server";
import { redirect } from "next/navigation";
import { validateLink } from "../schemas/linkSchema";
//import { insert } from "../db_mySql";
import { insert } from "../db_firebase";

export async function GET(req) {
  //console.log("hola", req.headers.get("x-forwarded-for")); recupera id privada para saber cuantas peticones ha hecho
  return redirect("/");
}

export async function POST(req, res) {
  const body = await req.json();
  const data = validateLink(body);
  if (!data.success) {
    return NextResponse.json({ error: data.error.message }, { status: 400 });
  }

  let url = body.url;
  if (url.startsWith("http://") || url.startsWith("https://")) {
    url = url.replace(/^https?:\/\//, "");
  }
  //const result = await insert({ url: url.toLowerCase() });
  const result = await insert({ url: url });

  return NextResponse.json(result);
}
