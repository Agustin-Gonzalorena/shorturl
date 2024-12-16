import "./globals.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { textFont } from "./fonts";

export const metadata = {
  title: "Acortador URL - ShortURL - Acortar Enlace",
  description:
    "Acortador de URL, acortar enlace, acortar link, acortar url, acortar enlace gratis, acortar link gratis, acortar url gratis, acortar enlace online, acortar link online, acortar url online, acortar enlace corto, acortar link corto, acortar url corto, acortar enlace corto gratis",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={textFont.className}>
        <Header />
        <main
          className={`min-w-wh flex flex-col justify-start items-center pt-16 md:pt-[8%] font-extrabold`}
        >
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
