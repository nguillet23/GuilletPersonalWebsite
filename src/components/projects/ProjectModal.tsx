import type { Project } from "../../types/project";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  // TODO: overlay + modal body (image, num, title, tags, details paragraphs, links), escape-to-close
  if (!project) return null;
  return null;
}
