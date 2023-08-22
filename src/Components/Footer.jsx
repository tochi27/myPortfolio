import React from "react";
import styles from "./footer.module.css";

export default function Footer() {
  return (
    <div className={styles.footerWrapper}>
      <a
        href={"https://github.com/tochi27"}
        target="_blank"
        rel="noreferrer"
        className={styles.anchor}
      >
        <i className={`fa-brands fa-github ${styles.icon}`}></i>
      </a>

      <a
        href={"https://www.linkedin.com/in/heytochi"}
        target="_blank"
        rel="noreferrer"
        className={styles.anchor}
      >
        <i className={`fa-brands fa-linkedin ${styles.icon}`}></i>
      </a>

      <a
        href={"Mailto:tochukwuamaechina2703@gmail.com"}
        target="_blank"
        rel="noreferrer"
        className={styles.anchor}
      >
        <i className={`fa-solid fa-envelope ${styles.icon}`}></i>
      </a>
    </div>
  );
}
