# Tasks

Status: `todo` · `doing` · `done` · `blocked (question)` · `future`.
"Done" for any content task means: data edited, image present, `npm run check` passes, and the
page looks right in `npm run dev`.

Plan approved in parts on 2026-11-03. **Nothing below T0 has been coded yet.**

---

## G: Git history and workflow

### G1: Clean up the past (no rewrites of `main`)

`main` is published, deploys the site, and its PR merges (#1–#5) link to GitHub. Rewriting it
would need a force-push and would break those links, so the old history stays as it is. Instead:

| #    | Task                                                                                                                                                                                                                                                       | Status |
| ---- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------ |
| G1.1 | ~~Delete merged branches~~: **won't do**, the user keeps all branches                                                                                                                                                                                      | n/a    |
| G1.2 | _(optional, user undecided)_ Tag milestones on `main` so the history reads as versions: `v1.0` = `80e3615` (static site, June), `v1.1` = `30ac8a1` (multi-page, PR #2), `v2.0` = `e73c609` (React rewrite, PR #3), `v2.1` = `7efc597` (Sept update, PR #5) | todo   |
| G1.3 | Write the convention below into `CLAUDE.md` and `DECISIONS.md`                                                                                                                                                                                             | done   |

### G2: Convention from now on

- Branches: `<type>/<short-name>`, e.g. `chore/repo-structure`, `content/2026-11-update`.
- Commits: `<type>: <imperative summary>`. Types are `feat` (UI or behavior), `content`
  (`src/data` and assets), `fix`, `chore` (tooling and config), `docs`, `test`.
- One logical change per commit. Merge to `main` only through a PR. Branches are kept after merging, never deleted. Tag `vX.Y` after each
  merged update.

### G3: This round's branches and commits

Two PRs so the restructure can merge on its own. PR A lives on the existing `november-update` branch.

**PR A: `november-update`**, merge first, then tag `v2.2`

1. `test: move tests into tests/ mirroring src/`
2. `chore: add npm run check script`
3. `docs: add CLAUDE.md, docs/ and .claude/ project config`

**PR B: `content/2026-11-update`**, branched from `main` after PR A merges, tagged `v2.3`

1. `content: update resume PDF and experience to Oct 2026 resume` (T1)
2. `feat: add Leadership section to experience page` (T2, includes a test)
3. `content: add Huck It project` (T3.1)
4. `feat: allow projects without an image` (T3.3, includes a test)
5. `content: add Player Report Cards project` (T3.2)
6. `content: rewrite XR Lacrosse and merge UFA stats into Frisbee card` (T4)
7. `content: update skills` (T5)
8. `docs: log November update`

Branches are kept after merging.

---

## T0: Repo restructure (done, uncommitted)

| #   | Task                                                          | Status |
| --- | ------------------------------------------------------------- | ------ |
| 0.1 | Add CLAUDE.md, docs/, .claude/, .env.example                  | done   |
| 0.2 | Move tests to `tests/` (mirrors `src/`), update vite/tsconfig | done   |
| 0.3 | Add `scripts/check.mjs` + `npm run check`                     | done   |

---

## November 2026 content update

Last site update: **2026-09-17**. Sources: `Current_Projects/` and the resume dated
**2026-10-13** (`Current_Projects/Agents/Job_Agent/Guillet_Resume.pdf`).

### T1: Resume and experience (`src/data/experience.ts`, `education.ts`)

| #   | Task                                                                                                                                                        | Status |
| --- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- | ------ |
| 1.1 | Replace `public/Content/Guillet_Resume.pdf` with the 10/13 version                                                                                          | todo   |
| 1.2 | Villanova Soccer → **Student Engineering Manager**: performance platform (React/TS/Postgres, 20+ players), Wyscout PDF ingestion, Clerk + RLS for 30+ users | todo   |
| 1.3 | ConstructConnect → **Software Engineer Intern**: NER recall/precision +20% via synthetic data, SFTP 400% faster via parallelization                         | todo   |
| 1.4 | HOA → **Forward Deployed Software Engineer Intern**: Flask ETL demoed to the business team, 5+ sources consolidated                                         | todo   |
| 1.5 | Math Tutor: 20+ students, 4 courses; tags add Accounting, Finance                                                                                           | todo   |
| 1.6 | Education: "Expected May 2027", minors in resume order (Math, CS, Business)                                                                                 | todo   |

### T2: Leadership section (new)

| #   | Task                                                                                                                          | Status |
| --- | ----------------------------------------------------------------------------------------------------------------------------- | ------ |
| 2.1 | New `src/data/leadership.ts` (`TimelineItem[]`)                                                                               | todo   |
| 2.2 | **Senior-Year Team Captain**, Villanova Club Ultimate, Aug 2023–Present: 20+ athletes, training/strategy, game-day scouting   | todo   |
| 2.3 | Move **NovaRacing** (Data Acquisition Member) from Experience to Leadership, as the resume does; 10+ subsystems, 100+ signals | todo   |
| 2.4 | `Experience.tsx`: right column stacks Education then Leadership (it's shorter than Experience); mobile stays one column       | todo   |
| 2.5 | Test: the Experience page renders all three section headings                                                                  | todo   |

### T3: New projects (`src/data/projects.ts`)

| #   | Project                                                                                                                                                                                                    | Links / image                                                                                        | Status |
| --- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ------ |
| 3.1 | **Huck It**: browser game teaching ultimate offense from above. Canvas sim, AI vertical-stack cutters, leading passes, called cuts, stats, coach cards, slow-mo replays. React/TS/Vite/Vitest, CI to Pages | github `nguillet23/huckit` · live `nguillet23.github.io/huckit` · image: screenshot of the live game | todo   |
| 3.2 | **Nova Soccer Player Report Cards**: React 19, Vite, TS, Clerk, Neon Postgres + RLS, pdfjs. Coaches upload Wyscout PDFs; players get graded Performance Cards                                              | **No links, no image** (private project); details say so                                             | todo   |

| 3.3 | Make `Project.image` optional. With no image, `ProjectCard` and `ProjectModal` render a styled placeholder (project number + a "Private project" label, same height as an image) so the grid stays even. Test both cases | todo |

### T4: Update existing projects

| #   | Task                                                                                                                                                                                                                                                                                                              | Status |
| --- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------ |
| 4.1 | **XR Lacrosse**: rewrite the details (Magic Leap 2 + controller on the stick, Unity 6, animated virtual shooter, per-player history, 20 ms end-to-end latency); tags drop VIVE/Python; add `live` = project site. **Keep the current image**: the project-site photo is a phone shot of a monitor and looks worse | todo   |
| 4.2 | **Frisbee (merge)**: retitle to "Ultimate Frisbee Analytics"; details add the UFA model (144-game play-by-play, learned efficiency target, XGBoost + SHAP, PyTorch, leak-free walk-forward eval); tags add XGBoost, PyTorch. Keep the existing links                                                              | todo   |

### T5: Skills

| #   | Task                                                                                                               | Status |
| --- | ------------------------------------------------------------------------------------------------------------------ | ------ |
| 5.1 | Add React, C++, Flask, PyTorch, Unity, Google Cloud (devicon icons); remove Java, which the resume no longer lists | todo   |

### Future (not this round)

- **F1 Race Analysis**: get it to a better spot, push it to a GitHub repo, then add a card.
  Python on free OpenF1 + Jolpica data: tyre-degradation regression, pit-strategy optimiser
  with Monte Carlo safety cars, 2026 rules study, prediction model, Streamlit dashboard.
- **UFA stats site**: once `Frisbee-Game-Analysis`'s site is published, add it as the Frisbee
  card's `dashboard` link.
- **Player Report Cards**: add links if the repo is ever made public or a demo exists.

### Deliberately left out

- Local LLM agents (job search, code review): the user decided not to include them.
- `Agents/hiring-agent`: upstream repo (interviewstreet), commits aren't the user's.
- `Learning_Tech/`, `leetcode/`: study material.
- `NovaSoccer/Recruiting_Website`: only phase-0 questions so far.
- `XRLacrosse/SeniorProjectManager`: internal team tool.
