import type { Project } from "../types/project";

interface UseProjectModalResult {
  selected: Project | null;
  open: (project: Project) => void;
  close: () => void;
}

/**
 * Replaces openModal/closeModal + escape-key handling
 * from js/projects.js.
 */
export function useProjectModal(): UseProjectModalResult {
  // TODO: useState<Project | null>, escape-key listener, body-scroll-lock
  throw new Error("not implemented");
}
