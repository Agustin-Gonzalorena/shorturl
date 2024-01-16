import { logoFont } from "../../fonts";
import styles from "./Header.module.css";
const Header = () => {
  return (
    <header className={` h-auto p-6 pl-10`}>
      <h1
        className={`${logoFont.className} , ${styles.title} , text-5xl text-white`}
      >
        Short<strong className="text-[#FF4100]">URL</strong>
      </h1>
    </header>
  );
};

export default Header;
