import React from "react";
import styles from "./projects.module.css";
import SectionIntroduction from "./SectionIntroduction";
import meal from "../assests/meal.png";
import storefront from "../assests/storefront.png";
import weather from "../assests/weather.png";
// import student from "../assests/student.png";
import taskApp from "../assests/taskApp.png";

export default function Projects() {
  return (
    <section id="projects">
      <div className={styles.wrapper}>
        <SectionIntroduction>PROJECTS</SectionIntroduction>
        <div className={styles.sectionContent}>
          <div className={styles.imgDisplay}>
            <img className={styles.img} src={storefront} alt="Ecommerce Store" />
            <div className={styles.overlay}>
              <h2 className={styles.touchText}>E-commerce Store</h2>
              <p className={styles.paragraph}>
                Online Clothing E-commerce store built with React.js,
                TailwindCSS and API.
              </p>
              <div className={styles.links}>
                <a
                  href={"https://github.com/tochi27/react-classwork-project"}
                  rel="noreferrer"
                  target="_blank"
                  className={styles.button}
                >
                  <i className={`fa-brands fa-github ${styles.icons}`}></i>
                </a>
                <a
                  href={"https://react-table-project-ten.vercel.app"}
                  rel="noreferrer"
                  className={styles.button}
                >
                  Link to Demo &#8594;
                </a>
              </div>
            </div>
          </div>

          <div className={styles.imgDisplay}>
            <img className={styles.img} src={taskApp} alt="To-Do Web App" />
            <div className={styles.overlay}>
              <h2 className={styles.touchText}>Task Manager Web Application</h2>
              <p className={styles.paragraph}>
                A To-Do Task Web Application built with MERN-Stack and CSS.
              </p>
              <div className={styles.links}>
                <a
                  href={"https://github.com/tochi27/Mern-task-app-frontend"}
                  rel="noreferrer"
                  target="_blank"
                  className={styles.button}
                >
                  <i className={`fa-brands fa-github ${styles.icons}`}></i>
                </a>
                <a
                  href={"https://mern-task-app-3h2x.onrender.com/"}
                  rel="noreferrer"
                  className={styles.button}
                >
                  Link to Demo &#8594;
                </a>
              </div>
            </div>
          </div>

          <div className={styles.imgDisplay}>
            <img className={styles.img} src={meal} alt="Meal Recipe website" />
            <div className={styles.overlay}>
              <h2 className={styles.touchText}>Meal Recipe Website</h2>
              <p className={styles.paragraph}>
                Meal Recipe website built using Java Script, CSS and API.
              </p>
              <div className={styles.links}>
                <a
                  href={"https://github.com/tochi27/Purple-RECi-SiTE"}
                  rel="noreferrer"
                  target="_blank"
                  className={styles.button}
                >
                  <i className={`fa-brands fa-github ${styles.icons}`}></i>
                </a>
                <a
                  href={"https://purple-re-ci-si-te.vercel.app/"}
                  rel="noreferrer"
                  target="_blank"
                  className={styles.button}
                >
                  Link to Demo &#8594;
                </a>
              </div>
            </div>
          </div>

          <div className={styles.imgDisplay}>
            <img className={styles.img} src={weather} alt="Weather Update website" />
            <div className={styles.overlay}>
              <h2 className={styles.touchText}>Weather Website</h2>
              <p className={styles.paragraph}>
                Weather Update website built using Java Script, CSS and API.
              </p>
              <div className={styles.links}>
                <a
                  href={"https://github.com/tochi27/weather-App"}
                  rel="noreferrer"
                  target="_blank"
                  className={styles.button}
                >
                  <i className={`fa-brands fa-github ${styles.icons}`}></i>
                </a>
                <a
                  href={"https://weather-app-tfx1.vercel.app/"}
                  rel="noreferrer"
                  target="_blank"
                  className={styles.button}
                >
                  Link to Demo &#8594;
                </a>
              </div>
            </div>
          </div>

          {/* <div className={styles.imgDisplay}>
            <img className={styles.img} src={student} alt="Crypto Store" />
            <div className={styles.overlay}>
              <h2 className={styles.touchText}>Student Registration portal</h2>
              <p className={styles.paragraph}>
                Coming Soon.
              </p>
              <div className={styles.links}>
                <a
                  href={"https://github.com/tochi27/e-attendance/closed"}
                  rel="noreferrer"
                  target="_blank"
                  className={styles.button}
                >
                  <i className={`fa-brands fa-github ${styles.icons}`}></i>
                </a>
                <a
                  href={"https://e-attendance-six.vercel.appt/closed"}
                  rel="noreferrer"
                  target="_blank"
                  className={styles.button}
                >
                  Link to Demo &#8594;
                </a>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
}
