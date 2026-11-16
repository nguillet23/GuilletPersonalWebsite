import { render, screen } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { About } from "../../../src/components/about/About";
import { alsoWorkWith, skills } from "../../../src/data/skills";
import { profile } from "../../../src/data/profile";

describe("About", () => {
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

  it("shows an icon for every skill and the extra skills as one line", () => {
    render(<About />);
    for (const skill of skills) {
      expect(screen.getByRole("img", { name: skill.name })).toBeInTheDocument();
    }
    expect(screen.getByText(`Also: ${alsoWorkWith.join(" · ")}`)).toBeInTheDocument();
  });

  it("renders the bio from src/data/profile with its bold runs", () => {
    render(<About />);
    for (const paragraph of profile.bio) {
      for (const run of paragraph) {
        if (typeof run !== "string") {
          expect(screen.getByText(run.strong).tagName).toBe("STRONG");
        }
      }
    }
  });
});
