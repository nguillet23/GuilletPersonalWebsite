import { act, renderHook } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { useProjectModal } from "./useProjectModal";
import type { Project } from "../types/project";

const project: Project = {
  num: "001",
  title: "Test Project",
  image: "/Content/Test.png",
  tags: [],
  shortDesc: "A test project.",
  details: "Details.",
};

describe("useProjectModal", () => {
  it("starts with no project selected", () => {
    const { result } = renderHook(() => useProjectModal());
    expect(result.current.selected).toBeNull();
  });

  it("opens and closes a project", () => {
    const { result } = renderHook(() => useProjectModal());

    act(() => result.current.open(project));
    expect(result.current.selected).toEqual(project);

    act(() => result.current.close());
    expect(result.current.selected).toBeNull();
  });

  it("closes the project on Escape keydown", () => {
    const { result } = renderHook(() => useProjectModal());

    act(() => result.current.open(project));
    expect(result.current.selected).toEqual(project);

    act(() => {
      document.dispatchEvent(new KeyboardEvent("keydown", { key: "Escape" }));
    });
    expect(result.current.selected).toBeNull();
  });

  it("locks body scroll while a project is open and restores it on close", () => {
    const { result } = renderHook(() => useProjectModal());

    act(() => result.current.open(project));
    expect(document.body.style.position).toBe("fixed");

    act(() => result.current.close());
    expect(document.body.style.position).toBe("");
  });
});
