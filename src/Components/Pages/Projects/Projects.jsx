import React from "react";
import sharedSelectors from "../SharedStyles.module.css";
import selectors from "./Projects.module.css";
import styles from "./styles";
import { projects } from "../../Data";
import { FiFolder } from "react-icons/fi";
import { BiLink } from "react-icons/bi";
import { FaGithub } from "react-icons/fa";
import { Card } from "@mui/material"; 

const Projects = () => {
  return (
    <section id="projects">
        <div>
        <div className={sharedSelectors.title}>
          <h1>PROJECTS</h1>
        </div>
      <div className={selectors.mainContainer}> 
          {projects.map((project) => {
            return (
              <Card elevation={1} sx={styles.card} key={project.id}>
                <div className={selectors.demoImage}>
                <img src={project.url} alt='screenshot' />
                </div>
                <div className={selectors.project} key={project.id}>
                <div className={selectors.icons}>
                  <div className={selectors.folderIcon}>
                    <FiFolder />
                  </div>
                  <div className={selectors.linkSeeDiv}>
                    <div>
                      <a href={project.live}><BiLink /></a>
                    </div>
                    <div>
                      <a href={project.github}>
                        <FaGithub />
                      </a>
                    </div>
                  </div>
                </div>
                <div className={selectors.title}>
                  <h2>{project.title}</h2>
                </div>
                <div className={selectors.description}>
                  {project.description}
                </div>
                <div className={selectors.builtWith}>
                  {project.builtWith.map((tech) => {
                    return <div className={selectors.tech} key={tech}>{tech}</div>;
                  })}
                </div>
              </div>
              </Card>
            );
          })}
        </div>
      
        </div>
    </section>
  );
};

export default Projects;
