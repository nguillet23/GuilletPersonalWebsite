# Decisions

One line per major choice, newest last.

- **2026-08-26** Rewrote the static HTML/vanilla-JS site in Vite + React + TS: typed content and shared layout instead of four duplicated pages.
- **2026-08-26** CSS Modules + `tokens.css` instead of Tailwind: kept the existing dark/mono look without a utility-class rewrite.
- **2026-08-26** Content as typed TS modules, not JSON/CMS: the compiler catches missing fields and there's nothing to host.
- **2026-08-26** GitHub Pages + Actions with `404.html` = `index.html` for client-side routes: free hosting, no server rewrites needed.
- **2026-09-17** Grouped components by section (`hero/`, `about/`, `projects/`…) instead of one flat folder.
- **2026-11-03** Adopted the `CLAUDE.md` + `docs/` + `.claude/` + `tests/` + `scripts/` layout; moved tests out of `src/` into a mirrored `tests/` tree.
- **2026-11-03** The resume is the source of truth for experience titles, dates and numbers; the site follows it.
- **2026-11-03** Keep every branch after it merges, never delete one; `main` is never rewritten. History is organized with tags and naming conventions instead.
