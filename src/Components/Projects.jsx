import React from "react";
import styles from "./projects.module.css";
import SectionIntroduction from "./SectionIntroduction";
import taskApp from "../assests/taskApp.png";
import taskAppWithAuth from "../assests/taskAppWithAuth.avif";
import langEasy from "../assests/langeasy.png";
import iris from "../assests/iris.png";
import qa from "../assests/qa.png";

export default function Projects() {
  return (
    <section id="projects">
      <div className={styles.wrapper}>
        <SectionIntroduction>PROJECTS</SectionIntroduction>
        <div className={styles.sectionContent}>
          {/* TaskApp */}
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

          {/* TaskApp with Auth */}
          <div className={styles.imgDisplay}>
            <img
              className={styles.img}
              src={taskAppWithAuth}
              alt="To-Do Web App"
            />
            <div className={styles.overlay}>
              <h2 className={styles.touchText}>
                Task Manager Web Application complete with Authentication(A Backend
                application)
              </h2>
              <p className={styles.paragraph}>
                A To-Do Task Web-Application(CRUD) built with User-authentication(A
                Backend application).
              </p>
              <div className={styles.links}>
                <a
                  href={"https://github.com/tochi27/NIYO-Task-Manager"}
                  rel="noreferrer"
                  target="_blank"
                  className={styles.button}
                >
                  <i className={`fa-brands fa-github ${styles.icons}`}></i>
                </a>
                <a
                  href={"https://niyo-task-manager.onrender.com/"}
                  rel="noreferrer"
                  className={styles.button}
                >
                  Link to Demo &#8594;
                </a>
              </div>
            </div>
          </div>

          {/* LangEasy */}
          <div className={styles.imgDisplay}>
            <img
              className={styles.img}
              src={langEasy}
              alt="Data Collection for AI. V1 "
            />
            <div className={styles.overlay}>
              <h2 className={styles.touchText}>
                A Multilingual Data Collection App leveraging African native intelligence for AI model training.
              </h2>
              <p className={styles.paragraph}>
                Data collection App Interface for training models. Built with
                React, Node.js, Express, and MongoDB.
              </p>
              <div className={styles.links}>
                <a
                  href={" "}
                  rel="noreferrer"
                  target="_blank"
                  className={styles.button}
                >
                  <i className={``}>Repo not available. Privately owned</i>
                </a>
                <a
                  href={
                    "https://langeasy-frontend-dev-tk7ash3eaa-uc.a.run.app/"
                  }
                  rel="noreferrer"
                  target="_blank"
                  className={styles.button}
                >
                  Link to Demo &#8594;
                </a>
              </div>
            </div>
          </div>

          {/* QA system */}
          <div className={styles.imgDisplay}>
            <img className={styles.img} src={qa} alt="QA System" />
            <div className={styles.overlay}>
              <h2 className={styles.touchText}>
                QA system with multi-user interface.
              </h2>
              <p className={styles.paragraph}>
                QA system with multi-user interface. 3 Layers of Data
                Quality-Assuring. Built with React, Node.js, Express, and
                MongoDB.
              </p>
              <div className={styles.links}>
                <a
                  href={" "}
                  rel="noreferrer"
                  target="_blank"
                  className={styles.button}
                >
                  <i className={``}>Repo not available. Privately owned</i>
                </a>
                <a
                  href={" "}
                  rel="noreferrer"
                  target="_blank"
                  className={styles.button}
                >
                  Link not available. Privately owned
                </a>
              </div>
            </div>
          </div>

          {/* Iris */}
          <div className={styles.imgDisplay}>
            <img className={styles.img} src={iris} alt="Iris" />
            <div className={styles.overlay}>
              <h2 className={styles.touchText}>Iris Chat Engine</h2>
              <p className={styles.paragraph}>
                Iris is an intelligent conversational engine designed to assist
                users in performing everyday tasks with ease and efficiency.
                Powered by natural language processing, it understands queries,
                provides insights, and seamlessly interacts with users to
                deliver personalized experiences.
              </p>
              <div className={styles.links}>
                <a
                  href={" "}
                  rel="noreferrer"
                  target="_blank"
                  className={styles.button}
                >
                  <i className={``}>Repo not available. Privately owned</i>
                </a>
                <a
                  href={" "}
                  rel="noreferrer"
                  target="_blank"
                  className={styles.button}
                >
                  Link not available. Privately owned
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
