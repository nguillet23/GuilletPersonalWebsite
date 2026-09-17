import { render } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { useScrollReveal } from "./useScrollReveal";

type ObserverCallback = ConstructorParameters<typeof IntersectionObserver>[0];

let observe: ReturnType<typeof vi.fn>;
let unobserve: ReturnType<typeof vi.fn>;
let disconnect: ReturnType<typeof vi.fn>;
let triggerIntersect: (entry: Partial<IntersectionObserverEntry>) => void;

function Revealed() {
  const ref = useScrollReveal<HTMLDivElement>();
  return <div data-testid="revealed" ref={ref} />;
}

beforeEach(() => {
  observe = vi.fn();
  unobserve = vi.fn();
  disconnect = vi.fn();

  vi.stubGlobal(
    "IntersectionObserver",
    vi.fn((callback: ObserverCallback) => {
      triggerIntersect = (entry) =>
        callback([entry as IntersectionObserverEntry], {} as IntersectionObserver);
      return { observe, unobserve, disconnect };
    }),
  );
});

afterEach(() => {
  vi.unstubAllGlobals();
});

describe("useScrollReveal", () => {
  it("observes the attached element on mount", () => {
    const { getByTestId } = render(<Revealed />);
    expect(observe).toHaveBeenCalledWith(getByTestId("revealed"));
  });

  it("adds the revealed class once the element intersects, then stops observing", () => {
    const { getByTestId } = render(<Revealed />);
    const el = getByTestId("revealed");

    triggerIntersect({ isIntersecting: true, target: el });

    expect(el.classList.contains("revealed")).toBe(true);
    expect(unobserve).toHaveBeenCalledWith(el);
  });

  it("does not add the revealed class when not intersecting", () => {
    const { getByTestId } = render(<Revealed />);
    const el = getByTestId("revealed");

    triggerIntersect({ isIntersecting: false, target: el });

    expect(el.classList.contains("revealed")).toBe(false);
    expect(unobserve).not.toHaveBeenCalled();
  });

  it("disconnects the observer on unmount", () => {
    const { unmount } = render(<Revealed />);
    unmount();
    expect(disconnect).toHaveBeenCalledOnce();
  });
});
