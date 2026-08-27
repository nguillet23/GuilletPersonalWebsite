import { useCallback, useEffect, useState } from "react";
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
  const [selected, setSelected] = useState<Project | null>(null);

  const open = useCallback((project: Project) => setSelected(project), []);
  const close = useCallback(() => setSelected(null), []);

  useEffect(() => {
    if (!selected) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [selected, close]);

  return { selected, open, close };
}
