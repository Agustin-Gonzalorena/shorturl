import { redirectUrl } from "../services";

async function page({ params }) {
  const { shortUrl } = params;
  console.log(shortUrl);
  const result = await redirectUrl(shortUrl);
  if (!result) {
    return (
      <div>Lo lamento la direccion "shorturl.ar/{shortUrl}" no existe</div>
    );
  }
}

export default page;
