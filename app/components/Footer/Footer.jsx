import Image from "next/image";
import React from "react";
import { FaGithubAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#0A7DC8] min-h-24 p-8 box-content flex flex-col items-center text-gray">
      <div className="flex justify-center ">
        <a href="/" className="h-14 w-14 bg-gray-700 rounded-full relative">
          <Image src="/favicon.ico" alt="" fill={true} className="p-1" />
        </a>
      </div>
      <div className="text-center mt-5 mb-5 pl-[15%] pr-[15%]">
        <h3 className="font-bold text-xl mb-3">ShortUrl</h3>
        <p className="text-l text-justify">
          Este espacio de <strong>acortamiento de URLs</strong> ha sido creado
          con amor y código para propósitos de práctica en programación.
          <strong> Es 100% funcional</strong>, pero ten en cuenta que se
          proporciona sin garantías.{" "}
          <strong>No me hago responsable del mal uso</strong> que pueda hacerse
          de los enlaces acortados. ¡Disfruta explorando y experimentando con
          nosotros, pero úsalo con responsabilidad! 🚀
        </p>
      </div>
      <div className="flex justify-center text-sm pt-3 min-w-full gap-6 md:gap-12 flex-col items-center md:flex-row">
        <p className="md:w-[50%] text-right">copyright ©2024 shortUrl</p>
        <p className="md:w-[50%] flex gap-1">
          Creado por{" "}
          <a
            href="https://github.com/Agustin-Gonzalorena"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold hover:text-white flex items-center gap-1"
          >
            Agustin Gonzalorena
            <FaGithubAlt />
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
