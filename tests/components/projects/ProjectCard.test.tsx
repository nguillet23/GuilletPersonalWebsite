import { fireEvent, render, screen } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { ProjectCard } from "../../../src/components/projects/ProjectCard";
import type { Project } from "../../../src/types/project";

const project: Project = {
  num: "001",
  title: "Test Project",
  image: "/Content/Test.png",
  tags: ["React"],
  shortDesc: "A test project.",
  details: "Details.",
  github: "https://github.com/example/test",
};

describe("ProjectCard", () => {
  beforeEach(() => {
    // jsdom has no IntersectionObserver; useScrollReveal only needs these methods.
    vi.stubGlobal(
      "IntersectionObserver",
      class {
        observe() {}
        unobserve() {}
        disconnect() {}
      },
    );
  });

  afterEach(() => {
    vi.unstubAllGlobals();
  });

  it("opens the project when Enter or Space is pressed on the card", () => {
    const onSelect = vi.fn();
    render(<ProjectCard project={project} onSelect={onSelect} />);
    const card = screen.getByRole("button", { name: /Test Project/ });

    fireEvent.keyDown(card, { key: "Enter" });
    fireEvent.keyDown(card, { key: " " });

    expect(onSelect).toHaveBeenCalledTimes(2);
  });

  it("does not open the project when Enter is pressed on the GitHub link", () => {
    const onSelect = vi.fn();
    render(<ProjectCard project={project} onSelect={onSelect} />);

    fireEvent.keyDown(screen.getByRole("link", { name: /GitHub/ }), { key: "Enter" });

    expect(onSelect).not.toHaveBeenCalled();
  });
});
