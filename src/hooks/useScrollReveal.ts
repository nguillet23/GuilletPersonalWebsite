import type { RefObject } from "react";

/**
 * Replaces the duplicated fade-in IntersectionObserver block
 * from js/index.js, js/experience.js, js/projects.js.
 */
export function useScrollReveal<T extends HTMLElement>(): RefObject<T | null> {
  // TODO: ref + IntersectionObserver that toggles a "revealed" class/style once in view
  throw new Error("not implemented");
}
