"use client";
import React, { useState } from "react";
import styles from "./FormUrl.module.css";
import { PiWarningCircleBold } from "react-icons/pi";

const FormUrl = ({ setInfo }) => {
  const [urlSend, setUrlSend] = useState("");
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
        setUrlSend("");
      });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <form
        action="POST"
        onSubmit={handleSubmit}
        className={`${styles.form} w-full h-14 flex`}
      >
        <input
          type="text"
          ref={(inputRef) => inputRef && inputRef.focus()}
          name="urlSend"
          value={urlSend}
          onChange={(e) => setUrlSend(e.target.value)}
          className={`${styles.input} bg-[#0A7DC8] w-2/3 h-full rounded-l-2xl text-l md:text-xl text-white font-medium pl-4`}
          autoComplete="off"
          placeholder="Ingrese su enlace largo aqui"
        />
        {btnDisabled ? (
          <button
            className={`${styles.btn} bg-[#FF4100] w-1/3 h-full rounded-r-2xl text-xl font-medium md:text-2xl hover:text-white`}
            type="Submit"
            disabled
          >
            Cortar
          </button>
        ) : (
          <button
            className={`${styles.btn} bg-[#FF4100] w-1/3 h-full rounded-r-2xl text-xl font-medium md:text-2xl hover:text-white`}
            type="Submit"
          >
            Cortar URL
          </button>
        )}
      </form>
      {urlAccept != null ? (
        <p className="h-12"></p>
      ) : (
        <p className="text-red-600 text-sm h-12 flex items-center gap-1">
          <PiWarningCircleBold />
          URL inválida
        </p>
      )}
    </>
  );
};

export default FormUrl;
