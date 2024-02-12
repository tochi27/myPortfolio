import React from "react";
import styles from "./header.module.css";
import tochiPurple2 from "../assests/tochiPurple2.pdf";

export default function Header() {
  return (
    <header className={styles.header}>
      <h1 className={styles.headerText}>
        Tochukwu Henry Amaechina (Software Developer)
      </h1>
      <div className={styles.navItems}>
        <a href="#about-me" className={styles.anchor}>
          <i className={`fa-solid fa-user ${styles.icons}`}></i>
        </a>
        {/* <a href="#experience" className={styles.anchor}>
          <i className={`fa-solid fa-diagram-project ${styles.icons}`}></i>
        </a> */}
        <a href="#projects" className={styles.anchor}>
          <i className={`fa-solid fa-trophy ${styles.icons}`}></i>
        </a>
        <a
          href={"https://github.com/tochi27?tab=repositories"}
          target="_blank"
          rel="noreferrer"
          className={styles.anchor}
        >
          <i className={`fa-brands fa-github ${styles.icons}`}></i>
        </a>
      </div>
      <div className={styles.navItems}>
        <button>
          <a
            className={styles.resume}
            href={tochiPurple2}
            target="_blank"
            rel="noreferrer"
            download={tochiPurple2.pdf}
          >
            My Resume
          </a>
        </button>
      </div>
    </header>
  );
}
