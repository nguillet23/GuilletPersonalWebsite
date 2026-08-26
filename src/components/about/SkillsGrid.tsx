import type { Skill } from "../../types/skill";
import { skills } from "../../data/skills";

interface SkillsGridProps {
  skills?: Skill[];
}

export function SkillsGrid({ skills: items = skills }: SkillsGridProps) {
  // TODO: render one tile per skill (icon + name)
  return null;
}
