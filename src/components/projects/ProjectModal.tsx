import { useEffect, useId, useRef } from "react";
import type { Project } from "../../types/project";
import { Tag } from "../ui/Tag";
import { Button } from "../ui/Button";
import { ProjectImage } from "./ProjectImage";
import styles from "./ProjectModal.module.css";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  const titleId = useId();
  const closeRef = useRef<HTMLButtonElement>(null);

  // Move focus into the dialog when it opens and hand it back to whatever opened it
  // (usually the project card) when it closes.
  useEffect(() => {
    if (!project) return;
    const opener = document.activeElement as HTMLElement | null;
    closeRef.current?.focus();
    return () => opener?.focus();
  }, [project]);

  if (!project) return null;

  const paragraphs = project.details.split("\n\n");

  return (
    <div
      className={styles.overlay}
      role="dialog"
      aria-modal="true"
      aria-labelledby={titleId}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className={styles.modal}>
        <button ref={closeRef} className={styles.close} aria-label="Close" onClick={onClose}>
          ✕
        </button>
        <ProjectImage project={project} className={styles.image} />
        <div className={styles.body}>
          <div className={styles.num}>{project.num}</div>
          <div id={titleId} className={styles.title}>
            {project.title}
          </div>
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
              <Button href={project.github} target="_blank" rel="noreferrer">
                GitHub ↗
              </Button>
            )}
            {project.dashboard && (
              <Button variant="ghost" href={project.dashboard} target="_blank" rel="noreferrer">
                Dashboard ↗
              </Button>
            )}
            {project.live && (
              <Button variant="ghost" href={project.live} target="_blank" rel="noreferrer">
                Live Demo ↗
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
