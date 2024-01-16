import { logoFont } from "../../fonts";
const Header = () => {
  return (
    <header className="bg-white text-red-500 h-20">
      <h1 className={`${logoFont.className} bg-black text-3xl`}>ShortURL</h1>
    </header>
  );
};

export default Header;
