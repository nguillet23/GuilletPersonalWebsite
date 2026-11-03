---
name: update-portfolio
description: Refresh the portfolio with recent work — scan Current_Projects and the latest resume, propose content changes, then edit src/data after approval. Use when asked to "update the website" or add a project/experience entry.
---

# Update the portfolio

1. **Find the gap.** `git log -1 --format=%ad --date=short` on `main` is the last update.
   Only work after that date matters.
2. **Scan sources** (read-only):
   - `../../Current_Projects/*/` — each project's `README.md`, `CLAUDE.md`, plan files, and
     `git log --format='%an %ad %s' --date=short`. Skip repos where the user isn't the author.
   - The newest resume (currently `../../Current_Projects/Agents/Job_Agent/Guillet_Resume.pdf`).
     Its titles, dates and bullets are the source of truth for `experience.ts`.
3. **Propose before editing.** Write the proposed changes into `docs/TASKS.md` as a dated
   section and show the user. Ask about anything private (unpublished repos, invite-only apps,
   job-search tools) before putting it on a public site.
4. **Edit data only** in `src/data/*.ts`; add images to `public/Content/`. Keep project numbers
   sequential.
5. **Verify:** `npm run check`, then `npm run dev` and look at `/projects` and `/experience`.
6. **Log it:** add a line to `docs/PROGRESS.md`; mark tasks done in `docs/TASKS.md`.
