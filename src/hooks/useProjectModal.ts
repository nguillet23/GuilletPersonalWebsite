import { useCallback, useEffect, useState } from "react";
import type { Project } from "../types/project";

interface UseProjectModalResult {
  selected: Project | null;
  open: (project: Project) => void;
  close: () => void;
}

/** Tracks the open project, closes it on Escape and locks page scroll while it is open. */
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

    // iOS Safari ignores `overflow: hidden` on the body and still allows the
    // page behind a fixed-position modal to scroll/rubber-band, so pin the
    // body in place instead and restore the scroll position on close.
    const scrollY = window.scrollY;
    const { style } = document.body;
    style.position = "fixed";
    style.top = `-${scrollY}px`;
    style.left = "0";
    style.right = "0";
    style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      style.position = "";
      style.top = "";
      style.left = "";
      style.right = "";
      style.overflow = "";
      // "instant" overrides the global `scroll-behavior: smooth`, which would otherwise
      // animate the page from the top back down to the card on every close.
      window.scrollTo({ top: scrollY, behavior: "instant" });
    };
  }, [selected, close]);

  return { selected, open, close };
}
