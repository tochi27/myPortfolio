import React from "react";
import styles from "./experience.module.css";
import ListEntry from "./ListEntry";
import SectionIntroduction from "./SectionIntroduction";

export default function Experience() {
  return (
    <section id="experience">
      <div className={styles.wrapper}>
        <SectionIntroduction dark={true}>EXPERIENCE</SectionIntroduction>
        <div className={styles.sectionContent}>
          <ListEntry title={"Awarri AI "} date={"Nov 2023 - Present"}>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ListEntry>

          <ListEntry title={""} date={"Sep 2020 -July 2021"}>
            <li></li>
            <li></li>
            <li></li>
          </ListEntry>
        </div>
      </div>
    </section>
  );
}
