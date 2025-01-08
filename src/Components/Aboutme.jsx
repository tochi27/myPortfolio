import React from "react";
import styles from "./aboutme.module.css";
import SectionIntroduction from "./SectionIntroduction";
import express from "../assests/express.svg";

export default function Aboutme() {
  return (
    <section id="about-me" className={styles.aboutMe}>
      <div className={styles.wrapper}>
        <SectionIntroduction>ABOUT ME</SectionIntroduction>
        <div className={styles.sectionContent}>
          <p className={styles.paragraph}>
            I began self-learning Python but discovered my passion as a{" "}
            <strong>JavaScript (Node.js) Developer</strong>. <br /> With
            expertise in scalable backend solutions, database design, and API
            development, I deliver clean, efficient code for user-centric
            applications. Staying updated on industry trends, I specialize in
            microservices and cloud-based architectures. I'm eager to
            collaborate and bring innovative software projects to life.
          </p>
          <p className={styles.paragraph}>
            The Stacks I use include (but are not limited to){" "}
            <strong>
              {" "}
              NodeJs, Express, MonogoDB, Git, ReactJs, JavaScript, HTML, CSS,
              TailwindCss, ES6.
            </strong>
            .
          </p>
        </div>
        <div className={styles.icons}>
          <i class="fa-brands fa-node"></i>
          <i>
            <img src={express} alt="" srcset="" width={80} />
          </i>
          <i class="fa-brands fa-react"></i>
          <i class="fa-brands fa-js"></i>
          <i class="fa-brands fa-html5"></i>
          <i class="fa-brands fa-css3-alt"></i>
          <i class="fa-brands fa-git"></i>
        </div>
      </div>
    </section>
  );
}
