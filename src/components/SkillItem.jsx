import Proptypes from "prop-types";
import styles from "./SkillItem.module.css";

function SkillItem({ skill }) {
  return (
    <div className={styles.skillitem}>
      <p>
        {skill.icons.map((icon, index) => (
          <span
            key={index}
            dangerouslySetInnerHTML={{ __html: icon }}
            className={styles.svg}
          />
        ))}
      </p>
      <h3>{skill.title}</h3>
      <p>{skill.body}</p>
    </div>
  );
}

SkillItem.propTypes = {
  skill: Proptypes.object,
  i: Proptypes.number,
};

export default SkillItem;
