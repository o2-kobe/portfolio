import styles from "./Projects.module.css";
import projects from "../data/ProjectData";
import ProjectItem from "./ProjectItem";

function Projects() {
  return (
    <div className={styles.projects} id="projects">
      <div>
        <h5>Portfolio</h5>
        <h3>My Recent Projects</h3>
        <p>Explore my work and see what I can do</p>
      </div>

      <div className={styles.projectCard}>
        {projects.map((project) => (
          <ProjectItem project={project} key={project.id} />
        ))}
      </div>
    </div>
  );
}

export default Projects;
