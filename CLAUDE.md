# CLAUDE.md

Personal portfolio for Nicholas Guillet. Vite + React 18 + TypeScript (strict), CSS Modules,
React Router, deployed to GitHub Pages at https://nguillet23.github.io/GuilletPersonalWebsite/.

Start of a session: read `docs/PROGRESS.md`, then `docs/TASKS.md` for what's next.

## Commands

| Command          | Does                                                 |
| ---------------- | ---------------------------------------------------- |
| `npm run dev`    | Dev server (served under `/GuilletPersonalWebsite/`) |
| `npm run check`  | Typecheck, lint, format check and tests in one go    |
| `npm run build`  | Typecheck, then build to `dist/`                     |
| `npm test`       | Vitest, once                                         |
| `npm run format` | Prettier write                                       |

Run `npm run check` before calling any change done.

## Layout

- `src/data/*.ts`: **all site content** (projects, experience, education, skills, social
  links). Content updates are data edits here, not component edits.
- `src/types/`: the interfaces those data files must satisfy.
- `src/components/<section>/`: UI, one folder per section, each with a `.module.css`.
- `public/Content/`: images and `Guillet_Resume.pdf`. Reference them as `/Content/...` and
  wrap with `asset()` from `src/lib/asset.ts` so the Pages base path is applied.
- `tests/`: Vitest + React Testing Library, mirroring `src/` paths. Setup in `tests/setup.ts`.
- `docs/`: PRD, architecture, task list, decisions and progress log.

## Conventions

- Projects are numbered `"001"`, `"002"`… in display order; renumber when inserting.
- `details` paragraphs are split on `\n\n` when rendered.
- Experience entries are newest first and should match the resume's titles and dates.
- Write content the way the resume does: concrete outcomes and numbers, no filler.

## Git

- Branches: `<type>/<short-name>` (e.g. `content/2026-11-update`). Commits:
  `<type>: <imperative summary>`, with type one of `feat`, `content`, `fix`, `chore`, `docs`, `test`.
- One logical change per commit. Merge to `main` only through a PR; tag `vX.Y` after each update.
- **Never delete branches**, local or remote, even after they merge. Never rewrite or force-push `main`.

## Don't touch

- `.github/workflows/deploy.yml` copies `index.html` to `404.html` so deep links survive a
  refresh on Pages. Don't remove it.
- `base` in `vite.config.ts` must match the repo name.
- Never push to `main` directly. Work on a branch and merge via PR; a push to `main` deploys.
- `updates.md` is a gitignored historical plan for the React rewrite. Leave it alone.
