import styles from "./Skills.module.css";
import SkillItem from "./SkillItem";
import data from "../data/SkillsData";

function Skills() {
  return (
    <div className={styles.skills} id="skills">
      <h2>
        <span>Explore My Key Skills and</span>
        <span>Technologies</span>{" "}
      </h2>

      <div className={styles.skillitems}>
        {data.map((skill) => (
          <SkillItem key={skill.id} skill={skill} />
        ))}
      </div>
    </div>
  );
}

export default Skills;
