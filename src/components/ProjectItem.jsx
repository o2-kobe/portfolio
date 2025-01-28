import styles from "./ProjectItem.module.css";
import Proptypes from "prop-types";

function ProjectItem({ project }) {
  return (
    <div className={styles.projectItem}>
      <img src={project.image} alt={project.name} />
      <h4>{project.name}</h4>
      <p>{project.description}</p>
      <div className={styles.tools}>
        {project.tools.map((tool, i) => (
          <span key={i} className={styles.tool}>
            {tool}
          </span>
        ))}
      </div>
    </div>
  );
}

ProjectItem.propTypes = {
  project: Proptypes.object.isRequired,
};

export default ProjectItem;
