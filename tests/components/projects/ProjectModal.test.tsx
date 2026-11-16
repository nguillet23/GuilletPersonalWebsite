import { render, screen, fireEvent } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { ProjectModal } from "../../../src/components/projects/ProjectModal";
import type { Project } from "../../../src/types/project";

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

  it("is named by the project title and moves focus to the close button", () => {
    render(<ProjectModal project={project} onClose={vi.fn()} />);
    expect(screen.getByRole("dialog", { name: "Test Project" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /close/i })).toHaveFocus();
  });

  it("returns focus to the element that opened it when it closes", () => {
    const opener = document.createElement("button");
    document.body.appendChild(opener);
    opener.focus();

    const { rerender } = render(<ProjectModal project={project} onClose={vi.fn()} />);
    rerender(<ProjectModal project={null} onClose={vi.fn()} />);

    expect(opener).toHaveFocus();
    opener.remove();
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
