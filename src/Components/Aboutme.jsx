import React from "react";
import styles from "./aboutme.module.css";
import SectionIntroduction from "./SectionIntroduction";

export default function Aboutme() {
  return (
    <section id="about-me" className={styles.aboutMe}>
      <div className={styles.wrapper}>
        <SectionIntroduction>ABOUT ME</SectionIntroduction>
        <div className={styles.sectionContent}>
          <p className={styles.paragraph}>
            I started out self-learning the python programming language but along the line found myself becoming a {" "}
            <strong>Software Developer</strong> . I derive joy and fufilment in solving problems with clean scalable solutions, and also have the desire to create designs. I also operate as a backend developer, creating Strong databases and APIs. Working in a team is also an exciting and postive atmosphere for me, because I get to share and listen to ideas from other developers, which affects my growth and development in positive ways.
          </p>
          <p className={styles.paragraph}>
             The Stacks I use include (but are not limited to){" "}
            <strong>
              {" "}
              HTML,CSS & JavaScript(the foundations of it all!!!), ReactJs,
              TailwindCss, ES6, NodeJs, Express
              MonogoDB, Github
            </strong>
            .
          </p>
        </div>
        <div className={styles.icons}>
          <i class="fa-brands fa-html5"></i>
          <i class="fa-brands fa-css3-alt"></i>
          <i class="fa-brands fa-js"></i>
          <i class="fa-brands fa-react"></i>
          <i class="fa-brands fa-node"></i>
          <i class="fa-brands fa-github"></i>
        </div>
      </div>
    </section>
  );
}
