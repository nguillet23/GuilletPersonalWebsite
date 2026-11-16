import type { Project } from "../../types/project";
import { asset } from "../../lib/asset";
import styles from "./ProjectImage.module.css";

interface ProjectImageProps {
  project: Project;
  /** Sizing class from the parent (card or modal), applied to the image or placeholder. */
  className: string;
}

/** A project's image, or a styled placeholder for private projects that have none. */
export function ProjectImage({ project, className }: ProjectImageProps) {
  if (project.image) {
    return <img className={className} src={asset(project.image)} alt={project.title} />;
  }

  return (
    <div
      className={`${className} ${styles.placeholder}`}
      role="img"
      aria-label={`${project.title}: private project, no image`}
    >
      <div className={styles.inner}>
        <span className={styles.num}>{project.num}</span>
        <span className={styles.label}>Private project</span>
      </div>
    </div>
  );
}
