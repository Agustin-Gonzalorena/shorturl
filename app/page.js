"use client";
import React, { useState } from "react";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

export default function Home() {
  const [urlSend, setUrlSend] = useState("");
  const [info, setInfo] = useState([]);
  const [urlAccept, setUrlAccept] = useState("");
  const validarURL = (url) => {
    const pattern = new RegExp(
      "^(https?:\\/\\/)?" + // protocolo
        "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" + // nombre de dominio
        "((\\d{1,3}\\.){3}\\d{1,3}))" + // OR ip (v4) address
        "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // puerto y ruta
        "(\\?[;&a-z\\d%_.~+=-]*)?" + // cadena de consulta
        "(\\#[-a-z\\d_]*)?$",
      "i"
    ); // fragmento de la url
    console.log(pattern.test(url));
    if (!pattern.test(url)) setUrlAccept(null);
    return pattern.test(url);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!validarURL(urlSend)) return;
    try {
      const response = await fetch("/api", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ url: urlSend }),
      });
      await response.json().then((data) => setInfo(data));
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <Header />
      {info != [] ? (
        <div>
          <p>{info.url}</p>
          <p>{info.shortUrl}</p>
        </div>
      ) : (
        <div></div>
      )}
      <form action="POST" onSubmit={handleSubmit}>
        <input
          type="text"
          name="urlSend"
          value={urlSend}
          onChange={(e) => setUrlSend(e.target.value)}
          className="bg-blue-900"
        />
        <button className="bg-green-800" type="Submit">
          Enviar
        </button>
      </form>
      {urlAccept != null ? <p>URL válida</p> : <p>URL inválida</p>}
      <Footer />
    </>
  );
}
