import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import FormUrl from "./components/FormUrl/FormUrl";
import { textFont } from "./fonts";

export const metadata = {
  title: "Acortador URL- ShortURL",
};

export default function Home() {
  return (
    <>
      <Header />
      <div className="contain-curve"></div>
      <main
        className={` ${textFont.className} ,bg-slate-500 min-w-wh min-h-screen flex flex-col justify-start items-center pt-[7%] font-extrabold`}
      >
        <h1 className="text-4xl md:text-6xl">Acortador de link</h1>
        <div className=" min-h-56 w-full md:w-2/4 flex items-center justify-center p-2 flex-col">
          <FormUrl />
        </div>
      </main>
      <Footer />
    </>
  );
}
