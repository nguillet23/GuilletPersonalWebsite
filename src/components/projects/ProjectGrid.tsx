import { projects } from "../../data/projects";
import { ProjectCard } from "./ProjectCard";
import { ProjectModal } from "./ProjectModal";
import { useProjectModal } from "../../hooks/useProjectModal";
import styles from "./Projects.module.css";

export function ProjectGrid() {
  const { selected, open, close } = useProjectModal();

  return (
    <section id="projects" className={styles.section}>
      <div className="section-label">Projects</div>
      <h2>Things I've Built</h2>
      <div className={styles.grid}>
        {projects.map((project) => (
          <ProjectCard key={project.num} project={project} onSelect={open} />
        ))}
      </div>
      <ProjectModal project={selected} onClose={close} />
    </section>
  );
}
