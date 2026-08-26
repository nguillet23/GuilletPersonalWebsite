import type { Project } from "../../types/project";

interface ProjectCardProps {
  project: Project;
  onSelect: (project: Project) => void;
}

export function ProjectCard({ project, onSelect }: ProjectCardProps) {
  // TODO: image, num, title, shortDesc, tags, "View Details" + GitHub/dashboard links
  return null;
}
