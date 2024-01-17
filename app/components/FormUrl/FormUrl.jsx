"use client";
import React, { useState } from "react";

const FormUrl = () => {
  const [urlSend, setUrlSend] = useState("");
  const [info, setInfo] = useState([]);
  const [urlAccept, setUrlAccept] = useState("");
  const [btnDisabled, setBtnDisabled] = useState(false);

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
    setBtnDisabled(true);
    if (!validarURL(urlSend)) {
      setBtnDisabled(false);
      return;
    }
    try {
      const response = await fetch("/api", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ url: urlSend }),
      });
      await response.json().then((data) => {
        setInfo(data);
        setBtnDisabled(false);
      });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      {info != [] ? (
        <div>
          <p>{info.url}</p>
          <p>{info.shortUrl}</p>
        </div>
      ) : (
        <div></div>
      )}
      <form action="POST" onSubmit={handleSubmit} className=" w-full h-14 flex">
        <input
          type="text"
          name="urlSend"
          value={urlSend}
          onChange={(e) => setUrlSend(e.target.value)}
          className="bg-[#0A7DC8] w-2/3 h-full rounded-l-2xl text-l md:text-xl text-white font-medium pl-4"
          autoComplete="off"
          placeholder="Ingrese su enlace largo aqui"
        />
        {btnDisabled ? (
          <button
            className="bg-[#FF4100] w-1/3 h-full rounded-r-2xl text-xl font-medium md:text-2xl  hover:border-2 hover:border-solid hover:border-opacity-100 hover:border-black  hover:text-white"
            type="Submit"
            disabled
          >
            Cortar
          </button>
        ) : (
          <button
            className="bg-[#FF4100] w-1/3 h-full rounded-r-2xl text-xl font-medium md:text-2xl  hover:border-2 hover:border-solid hover:border-opacity-100 hover:border-black  hover:text-white"
            type="Submit"
          >
            Cortar
          </button>
        )}
      </form>
      {urlAccept != null ? (
        <p className="h-12"></p>
      ) : (
        <p className="text-red-600 text-sm h-12">URL inválida</p>
      )}
    </>
  );
};

export default FormUrl;
