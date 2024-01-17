import { redirectUrl } from "../services";

async function page({ params }) {
  const { shortUrl } = params;
  console.log(shortUrl);
  const result = await redirectUrl(shortUrl);
  if (!result) {
    return (
      <div>
        Lo lamento la direccion <strong>shorturl.ar/{shortUrl}</strong> no
        existe
      </div>
    );
  }
}

export default page;
