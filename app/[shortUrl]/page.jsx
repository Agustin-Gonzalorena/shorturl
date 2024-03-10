import { TiWarning } from "react-icons/ti";
//import { redirectUrl } from "../db_mySql";
import { redirectUrl } from "../db_firebase";

async function page({ params }) {
  const { shortUrl } = params;

  const result = await redirectUrl(shortUrl);

  if (!result) {
    return (
      <div className="flex flex-col min-w-64 justify-center items-center gap-2">
        <TiWarning className="text-8xl text-[#b63232]" />
        <h2 className="text-7xl mb-4">404</h2>
        <p className="text-3xl">
          La direccion{" "}
          <strong className="font-thin text-[#064E7D]">
            shorturl.ar/{shortUrl}
          </strong>{" "}
          no existe.
        </p>

        <a href="/" className="bg-[#FF4100] p-4 rounded-full text-xl mt-5">
          Visitar ShortUrl.ar
        </a>
      </div>
    );
  }
}

export default page;
