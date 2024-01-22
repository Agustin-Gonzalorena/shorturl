import React, { useEffect, useState } from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import { FaRegCopy } from "react-icons/fa";
import { CopyAlert } from "../../utils/CopyAlert";

const HistoryLink = ({ dato }) => {
  const [datos, setDatos] = useState([]);

  useEffect(() => {
    if (dato.length == 0) {
      return;
    }
    //invertir array dato
    let prov = [...dato];
    prov.reverse();
    setDatos(prov);
  }, [dato]);

  return (
    <div className="bg-[#FF8C64] w-[90%] md:w-2/5 rounded-lg p-3 flex flex-col items-center mb-2">
      <h2 className="text-2xl mb-3">Link recientes:</h2>
      {datos.length == 0 ? (
        <p className="text-xl mb-3 font-thin">No hay recientes.</p>
      ) : (
        datos.map((item, index) => {
          return (
            <div
              className=" border-b-2 w-full flex justify-between p-2 font-thin"
              key={index}
            >
              <p className="w-[35%] md:w-[46%] overflow-hidden text-nowrap">
                {item.larga}
              </p>
              <p className="w-[40%] md:w-[30%]">
                <a
                  href={`http://` + item.corta}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#064E7D] hover:text-gray-300"
                >
                  {item.corta}
                </a>
              </p>
              <CopyToClipboard text={item.corta}>
                <button
                  className="w-[10%] flex justify-center items-center text-xl hover:text-white "
                  onClick={CopyAlert}
                >
                  <FaRegCopy />
                </button>
              </CopyToClipboard>
            </div>
          );
        })
      )}
    </div>
  );
};

export default HistoryLink;
