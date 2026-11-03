# Tasks

Status: `todo` · `doing` · `done` · `blocked (question)` · `future`.
"Done" for any content task means: data edited, image present, `npm run check` passes, and the
page looks right in `npm run dev`.

Plan approved on 2026-11-03. T0–T5 are done and committed on `november-update`.

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

The user chose to do the whole round on `november-update` as one PR (not pushed yet). Commits, oldest first:

1. `test: move tests into tests/ mirroring src/`
2. `chore: add npm run check script`
3. `docs: add CLAUDE.md, docs/ and .claude/ project config`
4. `content: update resume PDF and experience to Oct 2026 resume`
5. `chore: ignore Playwright MCP output`
6. `feat: add Leadership section to experience page`
7. `feat: allow projects without an image`
8. `content: add Huck It project`
9. `content: add Player Report Cards project`
10. `content: rewrite XR Lacrosse and merge UFA stats into Frisbee card`
11. `feat: support inverted skill icons for dark logos`
12. `content: update skills`
13. `fix: center private-project placeholder content`
14. `content: match About bio to resume internship title`
15. `docs: mark November update done and log follow-ups`

After merging: optionally tag `v2.2`. Branches are kept after merging.

---

## T0: Repo restructure (done)

| #   | Task                                                          | Status |
| --- | ------------------------------------------------------------- | ------ |
| 0.1 | Add CLAUDE.md, docs/, .claude/, .env.example                  | done   |
| 0.2 | Move tests to `tests/` (mirrors `src/`), update vite/tsconfig | done   |
| 0.3 | Add `scripts/check.mjs` + `npm run check`                     | done   |

---

## November 2026 content update (done)

Last site update: **2026-09-17**. Sources: `Current_Projects/` and the resume dated
**2026-10-13** (`Current_Projects/Agents/Job_Agent/Guillet_Resume.pdf`).

### T1: Resume and experience (`src/data/experience.ts`, `education.ts`)

| #   | Task                                                                                                                                                        | Status |
| --- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- | ------ |
| 1.1 | Replace `public/Content/Guillet_Resume.pdf` with the 10/13 version                                                                                          | done   |
| 1.2 | Villanova Soccer → **Student Engineering Manager**: performance platform (React/TS/Postgres, 20+ players), Wyscout PDF ingestion, Clerk + RLS for 30+ users | done   |
| 1.3 | ConstructConnect → **Software Engineer Intern**: NER recall/precision +20% via synthetic data, SFTP 400% faster via parallelization                         | done   |
| 1.4 | HOA → **Forward Deployed Software Engineer Intern**: Flask ETL demoed to the business team, 5+ sources consolidated                                         | done   |
| 1.5 | Math Tutor: 20+ students, 4 courses; tags add Accounting, Finance                                                                                           | done   |
| 1.6 | Education: "Expected May 2027", minors in resume order (Math, CS, Business)                                                                                 | done   |

### T2: Leadership section (new)

| #   | Task                                                                                                                          | Status |
| --- | ----------------------------------------------------------------------------------------------------------------------------- | ------ |
| 2.1 | New `src/data/leadership.ts` (`TimelineItem[]`)                                                                               | done   |
| 2.2 | **Senior-Year Team Captain**, Villanova Club Ultimate, Aug 2023–Present: 20+ athletes, training/strategy, game-day scouting   | done   |
| 2.3 | Move **NovaRacing** (Data Acquisition Member) from Experience to Leadership, as the resume does; 10+ subsystems, 100+ signals | done   |
| 2.4 | `Experience.tsx`: right column stacks Education then Leadership (it's shorter than Experience); mobile stays one column       | done   |
| 2.5 | Test: the Experience page renders all three section headings                                                                  | done   |

### T3: New projects (`src/data/projects.ts`)

| #   | Project                                                                                                                                                                                                    | Links / image                                                                                        | Status |
| --- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- | ------ |
| 3.1 | **Huck It**: browser game teaching ultimate offense from above. Canvas sim, AI vertical-stack cutters, leading passes, called cuts, stats, coach cards, slow-mo replays. React/TS/Vite/Vitest, CI to Pages | github `nguillet23/huckit` · live `nguillet23.github.io/huckit` · image: screenshot of the live game | done   |
| 3.2 | **Nova Soccer Player Report Cards**: React 19, Vite, TS, Clerk, Neon Postgres + RLS, pdfjs. Coaches upload Wyscout PDFs; players get graded Performance Cards                                              | **No links, no image** (private project); details say so                                             | done   |

| 3.3 | Make `Project.image` optional. With no image, `ProjectCard` and `ProjectModal` render a styled placeholder (project number + a "Private project" label, same height as an image) so the grid stays even. Test both cases | done |

### T4: Update existing projects

| #   | Task                                                                                                                                                                                                                                                                                                              | Status |
| --- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------ |
| 4.1 | **XR Lacrosse**: rewrite the details (Magic Leap 2 + controller on the stick, Unity 6, animated virtual shooter, per-player history, 20 ms end-to-end latency); tags drop VIVE/Python; add `live` = project site. **Keep the current image**: the project-site photo is a phone shot of a monitor and looks worse | done   |
| 4.2 | **Frisbee (merge)**: retitle to "Ultimate Frisbee Analytics"; details add the UFA model (144-game play-by-play, learned efficiency target, XGBoost + SHAP, PyTorch, leak-free walk-forward eval); tags add XGBoost, PyTorch. Keep the existing links                                                              | done   |

### T5: Skills

| #   | Task                                                                                                               | Status |
| --- | ------------------------------------------------------------------------------------------------------------------ | ------ |
| 5.1 | Add React, C++, Flask, PyTorch, Unity, Google Cloud (devicon icons); remove Java, which the resume no longer lists | done   |

### Future (not this round)

- **XR Lacrosse live link**: add `live: https://xrlacrosse-nova.github.io/NovaXRLacrosse/` once the project site is deployed (404 on 2026-11-03).
- **Huck It**: Milestone 2 (AI cutters, stats, replays) is only on the local `m2-ai-cutters` branch. After it's merged and deployed, update the card text and screenshot, since the live site still shows Milestone 1 with every mode marked "Coming soon".
- **Frisbee card links**: `Frisbee-Game-Analysis` is public; consider pointing the card's GitHub link at it, or adding a second link type.
- **About bio**: confirm whether "Captain for Main Line Ultimate" should match the resume's "Villanova Club Ultimate Frisbee".

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
