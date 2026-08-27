import type { Skill } from "../../types/skill";
import { skills as defaultSkills } from "../../data/skills";
import styles from "./SkillsGrid.module.css";

interface SkillsGridProps {
  skills?: Skill[];
}

export function SkillsGrid({ skills = defaultSkills }: SkillsGridProps) {
  return (
    <div className={styles.grid}>
      {skills.map((skill) => (
        <div className={styles.item} key={skill.name}>
          <img src={skill.iconUrl} alt={skill.name} loading="lazy" />
          <span>{skill.name}</span>
        </div>
      ))}
    </div>
  );
}
