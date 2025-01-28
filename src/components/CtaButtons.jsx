import styles from "./CtaButtons.module.css";

function CtaButtons() {
  return (
    <div className={styles.cta}>
      <button className={styles.learn}>
        <a href="#skills">Learn More</a>
      </button>
      <button>
        <a href="#connect">Contact</a>
      </button>
    </div>
  );
}

export default CtaButtons;
