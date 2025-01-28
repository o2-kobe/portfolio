import styles from "./ConnectLinks.module.css";

function ConnectLinks() {
  return (
    <div className={styles.icons}>
      <span>
        <a href="mailto:kobbykurtx@gmail.com">
          <svg
            className={styles.icon}
            id="Layer_1"
            style={{ enableBackground: "new 0 0 128 128" }}
            version="1.1"
            viewBox="0 0 128 128"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
          >
            <g>
              <path d="M127,16H1v6.7l63,59.8l55-52.2V104H9V50H1v62h126V16z M64,71.5L14,24H114L64,71.5z" />
            </g>
          </svg>
        </a>
      </span>

      <span>
        <a
          href="https://www.instagram.com/_o2.kobe"
          target="_blank"
          rel="noreferrer"
        >
          <svg
            className={styles.icon}
            data-name="Layer 1"
            id="Layer_1"
            viewBox="0 0 128 128"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <style>{`.cls-1 { fill: #062b31; }`}</style>
            </defs>
            <title />
            <path
              className="cls-1"
              d="M83,23a22,22,0,0,1,22,22V83a22,22,0,0,1-22,22H45A22,22,0,0,1,23,83V45A22,22,0,0,1,45,23H83m0-8H45A30.09,30.09,0,0,0,15,45V83a30.09,30.09,0,0,0,30,30H83a30.09,30.09,0,0,0,30-30V45A30.09,30.09,0,0,0,83,15Z"
            />
            <path
              className="cls-1"
              d="M90.14,32a5.73,5.73,0,1,0,5.73,5.73A5.73,5.73,0,0,0,90.14,32Z"
            />
            <path
              className="cls-1"
              d="M64.27,46.47A17.68,17.68,0,1,1,46.6,64.14,17.7,17.7,0,0,1,64.27,46.47m0-8A25.68,25.68,0,1,0,90,64.14,25.68,25.68,0,0,0,64.27,38.47Z"
            />
          </svg>
        </a>
      </span>

      <span>
        <a href="https://github.com/o2-kobe" target="_blank">
          <svg
            className={styles.icon}
            // className="feather feather-github"
            fill="none"
            height="24"
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            width="24"
          >
            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
          </svg>
        </a>
      </span>
    </div>
  );
}

export default ConnectLinks;
