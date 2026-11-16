import { skills } from "../../data/skills";
import styles from "./SkillsGrid.module.css";

export function SkillsGrid() {
  return (
    <div className={styles.grid}>
      {skills.map((skill) => (
        <div className={styles.item} key={skill.name}>
          <img
            src={skill.iconUrl}
            alt={skill.name}
            loading="lazy"
            className={skill.invert ? styles.inverted : undefined}
          />
          <span>{skill.name}</span>
        </div>
      ))}
    </div>
  );
}
