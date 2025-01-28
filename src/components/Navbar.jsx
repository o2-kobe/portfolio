import Logo from "./Logo";
import NavLinks from "./NavLinks";
import styles from "./Navbar.module.css";

function Navbar() {
  return (
    <div className={styles.navbar}>
      <Logo />
      <NavLinks />
    </div>
  );
}

export default Navbar;
