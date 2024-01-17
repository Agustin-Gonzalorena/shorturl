import { logoFont } from "../../fonts";
import styles from "./Header.module.css";
const Header = () => {
  return (
    <header
      className={` h-auto p-6  text-4xl flex justify-center md:text-5xl md:pl-10 md:block`}
    >
      <h1 className={`${logoFont.className} , ${styles.title} ,  text-white`}>
        Short<strong className="text-[#FF4100]">URL</strong>
      </h1>
    </header>
  );
};

export default Header;
