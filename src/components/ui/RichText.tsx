import type { RichText as RichTextRuns } from "../../types/profile";

/** Renders a data-file RichText, bolding its `{ strong }` runs. */
export function RichText({ runs }: { runs: RichTextRuns }) {
  return (
    <>
      {runs.map((run, i) =>
        typeof run === "string" ? run : <strong key={i}>{run.strong}</strong>,
      )}
    </>
  );
}
