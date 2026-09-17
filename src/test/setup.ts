import "@testing-library/jest-dom/vitest";
import { afterEach } from "vitest";
import { cleanup } from "@testing-library/react";

// jsdom doesn't implement layout/scrolling; useProjectModal calls this on close.
window.scrollTo = () => {};

afterEach(() => {
  cleanup();
});
