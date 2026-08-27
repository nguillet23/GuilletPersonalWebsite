import { useEffect, useRef } from "react";

/**
 * Replaces the duplicated fade-in IntersectionObserver block
 * from js/index.js, js/experience.js, js/projects.js.
 *
 * Attach the returned ref to an element; once it scrolls into view,
 * `revealed` (see styles/global.css `.reveal.revealed`) is added.
 */
export function useScrollReveal<T extends HTMLElement>(className = "revealed") {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add(className);
          observer.unobserve(el);
        }
      },
      { threshold: 0.1 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [className]);

  return ref;
}
