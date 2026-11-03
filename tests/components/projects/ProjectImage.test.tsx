import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { ProjectImage } from "../../../src/components/projects/ProjectImage";
import type { Project } from "../../../src/types/project";

const base: Project = {
  num: "007",
  title: "Test Project",
  tags: [],
  shortDesc: "A test project.",
  details: "Details.",
};

describe("ProjectImage", () => {
  it("renders the image when the project has one", () => {
    render(<ProjectImage project={{ ...base, image: "/Content/Test.png" }} className="img" />);
    const img = screen.getByRole("img", { name: "Test Project" });
    expect(img.tagName).toBe("IMG");
    expect(img).toHaveAttribute("src", expect.stringContaining("Content/Test.png"));
  });

  it("renders a labelled placeholder when the project has no image", () => {
    render(<ProjectImage project={base} className="img" />);
    const placeholder = screen.getByRole("img", { name: /private project/i });
    expect(placeholder.tagName).toBe("DIV");
    expect(placeholder).toHaveClass("img");
    expect(placeholder).toHaveTextContent("007");
  });
});
