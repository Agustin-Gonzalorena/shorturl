import { logoFont } from "../../fonts";
import styles from "./Header.module.css";
const Header = () => {
  return (
    <>
      <div className="contain-curve"> </div>
      <header
        className={` h-auto p-6  text-4xl flex justify-center md:text-5xl md:pl-10 md:block`}
      >
        <h1
          className={`${logoFont.className} ${styles.title} text-white w-fit`}
        >
          <a href="/">
            Short<strong className="text-[#FF4100]">URL</strong>
          </a>
        </h1>
      </header>
    </>
  );
};

export default Header;
