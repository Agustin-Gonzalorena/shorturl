import BoxForm from "./components/BoxForm/BoxForm";

export const metadata = {
  title: "Acortador URL- ShortURL",
};

export default function Home() {
  return (
    <>
      <h1 className="text-4xl md:text-6xl">ACORTADOR DE LINK</h1>
      <BoxForm />
    </>
  );
}
