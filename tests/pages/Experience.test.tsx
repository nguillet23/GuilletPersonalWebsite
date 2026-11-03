import { render, screen } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { Experience } from "../../src/pages/Experience";

describe("Experience page", () => {
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

  it("renders the Experience, Education and Leadership sections", () => {
    render(<Experience />);
    for (const title of ["Experience", "Education", "Leadership"]) {
      expect(screen.getByRole("heading", { level: 2, name: title })).toBeInTheDocument();
    }
  });

  it("lists NovaRacing under Leadership, not Experience", () => {
    render(<Experience />);
    expect(screen.getAllByText("NovaRacing FSAE Club")).toHaveLength(1);
    expect(screen.getByText("Senior-Year Team Captain")).toBeInTheDocument();
  });
});
