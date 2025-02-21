import CtaButtons from "./CtaButtons";
import styles from "./Header.module.css";

function Header() {
  return (
    <header className={styles.header} id="header">
      <h1>
        <span>Transforming Visions Into</span>
        <span>Seamless, High-Performing Web Experiences</span>
      </h1>

      <p>
        <span>
          I am passionate web developer specializing in HTML, CSS, Javascript
          ,and React. Let us
        </span>
        <span>
          bring your ideas to life with innovative and responsive web solutions
        </span>
      </p>

      <CtaButtons />
    </header>
  );
}

export default Header;
