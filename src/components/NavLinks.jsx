import styles from "./NavLinks.module.css";
import { useNavRefs } from "../contexts/useNavRefs";
import { useState } from "react";

function scrollToSection(ref, offset = 0) {
  if (ref.current) {
    ref.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });

    window.scrollBy(0, -offset);
  }
}

function NavLinks() {
  const [isOpen, setIsOpen] = useState(false);

  function toggleMenu() {
    setIsOpen((open) => !open);
  }

  const { homeRef, skillsRef, projectsRef, connectRef } = useNavRefs();
  return (
    <nav>
      <div className={styles.menu} onClick={toggleMenu}>
        {isOpen ? "✖" : "☰"}
      </div>

      <ul className={`${styles.links} ${isOpen ? styles.active : ""}`}>
        <li
          onClick={() => {
            toggleMenu();
            scrollToSection(homeRef, 100);
          }}
        >
          Home
        </li>
        <li
          onClick={() => {
            toggleMenu();
            scrollToSection(skillsRef, 100);
          }}
        >
          Skills
        </li>
        <li
          onClick={() => {
            toggleMenu();
            scrollToSection(projectsRef, 100);
          }}
        >
          Projects
        </li>
        <li
          onClick={() => {
            toggleMenu();
            scrollToSection(connectRef, 100);
          }}
        >
          Connect
        </li>
      </ul>
    </nav>
  );
}

export default NavLinks;
