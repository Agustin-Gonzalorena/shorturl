"use client";
import React, { useState, useRef, useEffect } from "react";
import styles from "./BoxForm.module.css";
import FormUrl from "../FormUrl/FormUrl";

const BoxForm = () => {
  const [info, setInfo] = useState([]);
  const [urlshort, setUrlshort] = useState("");

  const inputRef = useRef(null);

  const handleInputClick = () => {
    // Selecciona todo el contenido del campo de entrada
    inputRef.current.setSelectionRange(0, urlshort.length);
  };
  console.log(info);
  useEffect(() => {
    setUrlshort("shorturl.ar/" + info.shortUrl);
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
          <button className="bg-slate-500">CO</button>
        </div>
      ) : (
        <div></div>
      )}
    </>
  );
};

export default BoxForm;
