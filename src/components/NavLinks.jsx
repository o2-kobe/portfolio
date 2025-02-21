import styles from "./NavLinks.module.css";

import { useState } from "react";

function NavLinks() {
  const [isOpen, setIsOpen] = useState(false);

  function toggleMenu() {
    setIsOpen((open) => !open);
  }

  return (
    <nav>
      <div className={styles.menu} onClick={toggleMenu}>
        {isOpen ? "✖" : "☰"}
      </div>

      <ul className={`${styles.links} ${isOpen ? styles.active : ""}`}>
        <li
          onClick={() => {
            toggleMenu();
          }}
        >
          <a href="#header">Home</a>
        </li>
        <li
          onClick={() => {
            toggleMenu();
          }}
        >
          <a href="#skills">Skills</a>
        </li>
        <li
          onClick={() => {
            toggleMenu();
          }}
        >
          <a href="#projects">Projects</a>
        </li>
        <li
          onClick={() => {
            toggleMenu();
          }}
        >
          <a href="#connect">Connect</a>
        </li>
      </ul>
    </nav>
  );
}

export default NavLinks;
