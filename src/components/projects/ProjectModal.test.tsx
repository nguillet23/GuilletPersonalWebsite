import { render, screen, fireEvent } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { ProjectModal } from "./ProjectModal";
import type { Project } from "../../types/project";

const project: Project = {
  num: "001",
  title: "Test Project",
  image: "/Content/Test.png",
  tags: ["React", "TypeScript"],
  shortDesc: "A test project.",
  details: "First paragraph.\n\nSecond paragraph.",
  github: "https://github.com/example/test",
};

describe("ProjectModal", () => {
  it("renders nothing when no project is selected", () => {
    const { container } = render(<ProjectModal project={null} onClose={vi.fn()} />);
    expect(container).toBeEmptyDOMElement();
  });

  it("renders project details when a project is selected", () => {
    render(<ProjectModal project={project} onClose={vi.fn()} />);
    expect(screen.getByText("Test Project")).toBeInTheDocument();
    expect(screen.getByText("First paragraph.")).toBeInTheDocument();
    expect(screen.getByText("Second paragraph.")).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /GitHub/ })).toHaveAttribute(
      "href",
      "https://github.com/example/test",
    );
  });

  it("calls onClose when the close button is clicked", () => {
    const onClose = vi.fn();
    render(<ProjectModal project={project} onClose={onClose} />);
    fireEvent.click(screen.getByRole("button", { name: /close/i }));
    expect(onClose).toHaveBeenCalledOnce();
  });

  it("calls onClose when the overlay backdrop is clicked", () => {
    const onClose = vi.fn();
    render(<ProjectModal project={project} onClose={onClose} />);
    fireEvent.click(screen.getByRole("dialog"));
    expect(onClose).toHaveBeenCalledOnce();
  });

  it("does not call onClose when the modal body is clicked", () => {
    const onClose = vi.fn();
    render(<ProjectModal project={project} onClose={onClose} />);
    fireEvent.click(screen.getByText("First paragraph."));
    expect(onClose).not.toHaveBeenCalled();
  });
});
