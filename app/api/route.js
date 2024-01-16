import { NextResponse } from "next/server";
import { insert } from "../services";
import { redirect } from "next/navigation";

export async function GET(req) {
  //console.log("hola", req.headers.get("x-forwarded-for")); recupera id privada para saber cuantas peticones ha hecho
  return redirect("/");
}

export async function POST(req) {
  const data = await req.json();
  let url = data.url;
  if (url.startsWith("http://") || url.startsWith("https://")) {
    url = url.replace(/^https?:\/\//, "");
  }
  const result = await insert({ url: url });
  return NextResponse.json(result);
}
