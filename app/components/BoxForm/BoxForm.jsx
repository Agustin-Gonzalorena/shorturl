"use client";
import React, { useState, useRef, useEffect } from "react";
import styles from "./BoxForm.module.css";
import FormUrl from "../FormUrl/FormUrl";
import CopyToClipboard from "react-copy-to-clipboard";
import { FaRegCopy } from "react-icons/fa";
import HistoryLink from "../HistoryLink/HistoryLink";
import { CopyAlert } from "../../utils/CopyAlert";

const BoxForm = () => {
  const [info, setInfo] = useState([]);
  const [urlshort, setUrlshort] = useState("");
  const [dato, setDato] = useState([]);

  const inputRef = useRef(null);

  const handleInputClick = () => {
    // Selecciona todo el contenido del campo de entrada
    inputRef.current.setSelectionRange(0, urlshort.length);
  };

  useEffect(() => {
    if (info.length == 0) {
      return;
    }
    let prov = [...dato];
    prov.push({ corta: urlshort, larga: info.url });
    //let prov2 =  [{ corta: urlshort, larga: info.url }];
    setDato(prov);
    localStorage.setItem("misDatos", JSON.stringify(prov));
  }, [urlshort]);

  useEffect(() => {
    let datos = JSON.parse(localStorage.getItem("misDatos"));
    if (datos == null) {
      return;
    }
    if (datos.length >= 5) {
      datos = datos.slice(1);
      localStorage.setItem("misDatos", JSON.stringify(datos));
    }
    setDato(datos);
  }, [urlshort]);
  useEffect(() => {
    if (info.length == 0) {
      return;
    }
    const baseUrl = window.location.origin;
    const domain = baseUrl.replace(/^https?:\/\//, "");
    setUrlshort(`${domain}/${info.shortUrl}`);
  }, [info]);

  return (
    <>
      <div className=" min-h-40 w-full md:w-2/4 flex items-center justify-end p-2 flex-col">
        <FormUrl setInfo={setInfo} />
      </div>
      {info.length != 0 ? (
        <div className={`${styles.boxResult} w-2/5`}>
          <div>
            <p className={styles.show_url_larga}>{info.url}</p>
            <input
              className={styles.show_url_corta}
              type="text"
              placeholder="hola"
              readOnly
              value={urlshort}
              onClick={handleInputClick}
              ref={inputRef}
            />
          </div>
          <CopyToClipboard text={urlshort}>
            <button
              className="bg-slate-500 flex justify-center items-center text-xl"
              onClick={CopyAlert}
            >
              <FaRegCopy />
            </button>
          </CopyToClipboard>
        </div>
      ) : (
        <div></div>
      )}
      <HistoryLink dato={dato} />
    </>
  );
};

export default BoxForm;
