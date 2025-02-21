import ConnectLinks from "./ConnectLinks";
import styles from "./Connect.module.css";

function Connect() {
  return (
    <div className={styles.connect} id="connect">
      <h3>
        <span>Let us Collaborate on Your</span>
        <span>Project</span>
      </h3>

      <p>
        <span>
          I am eager to bring your ideas to life. Reach out for exciting project
          opportunities
        </span>
        <span>and collaboration.</span>
      </p>

      <ConnectLinks />

      <p className={styles.tele}>+233-530695257</p>
    </div>
  );
}

export default Connect;
