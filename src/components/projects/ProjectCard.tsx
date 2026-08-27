import type { Project } from "../../types/project";
import { Tag } from "../ui/Tag";
import { useScrollReveal } from "../../hooks/useScrollReveal";
import { asset } from "../../lib/asset";
import styles from "./ProjectCard.module.css";

interface ProjectCardProps {
  project: Project;
  onSelect: (project: Project) => void;
}

export function ProjectCard({ project, onSelect }: ProjectCardProps) {
  const revealRef = useScrollReveal<HTMLDivElement>();

  return (
    <div
      ref={revealRef}
      className={`${styles.card} reveal`}
      onClick={() => onSelect(project)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") onSelect(project);
      }}
    >
      <img src={asset(project.image)} alt={project.title} className={styles.image} />
      <div className={styles.body}>
        <div className={styles.num}>{project.num}</div>
        <h3>{project.title}</h3>
        <p>{project.shortDesc}</p>
        <div className={styles.tags}>
          {project.tags.map((tag) => (
            <Tag key={tag} label={tag} />
          ))}
        </div>
        <div className={styles.actions}>
          <button
            className={styles.viewDetails}
            onClick={(e) => {
              e.stopPropagation();
              onSelect(project);
            }}
          >
            View Details →
          </button>
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className={styles.ghLink}
              onClick={(e) => e.stopPropagation()}
            >
              GitHub ↗
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
