import React from "react";
import styles from "./aboutme.module.css";
import SectionIntroduction from "./SectionIntroduction";
import express from "../assests/express.svg"

export default function Aboutme() {
  return (
    <section id="about-me" className={styles.aboutMe}>
      <div className={styles.wrapper}>
        <SectionIntroduction>ABOUT ME</SectionIntroduction>
        <div className={styles.sectionContent}>
          <p className={styles.paragraph}>
            I started out self-learning the python programming language but
            along the line found myself becoming a{" "}
            <strong>JavaScript Developer</strong> <br></br>. As a passionate software
            developer, I excel in translating innovative concepts into fully
            functional, user-centric applications. I bring a robust skill-set to
            the table. My expertise extends to a deep understanding of database
            structures and APIs, enabling me to design and implement scalable
            backend solutions. My commitment to the craft is reflected in my
            dedication to producing clean code and employing efficient
            problem-solving techniques. I am always eager to collaborate with
            dynamic teams, contributing my skills to create impactful software
            solutions. Keeping pace with industry trends, I am versed in the
            latest backend developments, including the adoption of microservices
            and leveraging cloud computing for enhanced scalability and
            flexibility. Let's connect and explore the exciting realm of backend
            development, working together to bring innovative projects to life!
          </p>
          <p className={styles.paragraph}>
            The Stacks I use include (but are not limited to){" "}
            <strong>
              {" "}
              NodeJs, Express, MonogoDB, Git,
              ReactJs, JavaScript, HTML, CSS,
              TailwindCss, ES6.
            </strong>
            .
          </p>
        </div>
        <div className={styles.icons}>
          <i class="fa-brands fa-node"></i>
          <i><img src={express} alt="" srcset="" width={80}/></i>
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
