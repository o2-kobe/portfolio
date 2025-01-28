import styles from "./Footer.module.css";
import Logo from "./Logo";

function Footer() {
  return (
    <>
      <hr></hr>
      <div className={styles.footer}>
        <p>&copy; 2025. All Rights Reserved.</p>
        <Logo />
      </div>
    </>
  );
}

export default Footer;
