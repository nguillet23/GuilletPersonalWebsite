import type { Project } from "../../types/project";
import { Tag } from "../ui/Tag";
import { Button } from "../ui/Button";
import { asset } from "../../lib/asset";
import styles from "./ProjectModal.module.css";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  if (!project) return null;

  const paragraphs = project.details.split("\n\n");

  return (
    <div
      className={styles.overlay}
      role="dialog"
      aria-modal="true"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className={styles.modal}>
        <button className={styles.close} aria-label="Close" onClick={onClose}>
          ✕
        </button>
        <img className={styles.image} src={asset(project.image)} alt={project.title} />
        <div className={styles.body}>
          <div className={styles.num}>{project.num}</div>
          <div className={styles.title}>{project.title}</div>
          <div className={styles.tags}>
            {project.tags.map((tag) => (
              <Tag key={tag} label={tag} />
            ))}
          </div>
          {paragraphs.map((para) => (
            <p className={styles.desc} key={para}>
              {para}
            </p>
          ))}
          <div className={styles.links}>
            {project.github && (
              <Button as="a" variant="primary" href={project.github} target="_blank" rel="noreferrer">
                GitHub ↗
              </Button>
            )}
            {project.dashboard && (
              <Button as="a" variant="ghost" href={project.dashboard} target="_blank" rel="noreferrer">
                Dashboard ↗
              </Button>
            )}
            {project.live && (
              <Button as="a" variant="ghost" href={project.live} target="_blank" rel="noreferrer">
                Live Demo ↗
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
