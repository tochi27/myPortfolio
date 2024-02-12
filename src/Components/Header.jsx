import React from "react";
import styles from "./header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <h1 className={styles.headerText}>Tochukwu Henry Amaechina (Software Developer)</h1>
      <div className={styles.navItems}>
        <a href="#about-me" className={styles.anchor}>
          <i className={`fa-solid fa-user ${styles.icons}`}>About me</i>
        </a>
        {/* <a href="#experience" className={styles.anchor}>
          <i className={`fa-solid fa-diagram-project ${styles.icons}`}></i>
        </a> */}
        <a href="#projects" className={styles.anchor}>
          <i className={`fa-solid fa-trophy ${styles.icons}`}>Projects</i>
        </a>
        <a
          href={"https://github.com/tochi27?tab=repositories"}
          target="_blank"
          rel="noreferrer"
          className={styles.anchor}
        >
          <i className={`fa-brands fa-github ${styles.icons}`}>Github</i>
        </a>
      </div>
    </header>
  );
}
