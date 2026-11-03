# PRD: Personal Portfolio

## Problem

Recruiters and hiring managers spend under a minute deciding whether a candidate is worth a
closer look. A resume can't show working software. The portfolio is where they see real
projects, live demos and code.

## Users

- **Recruiters / hiring managers** (primary): skim projects and experience, download the resume.
- **Engineers reviewing a candidate**: open a project, follow it to GitHub or a live demo.
- **Coaches, teammates, classmates**: find links to the sports tools.

## Core flows

1. Land on `/` → see name, one-line pitch, resume download, GitHub/LinkedIn.
2. `/projects` → scan the cards → open a modal → click through to GitHub / live demo / dashboard.
3. `/experience` → read the experience and education timeline.
4. `/about` → short bio and skills grid.

## Must-haves

- Content matches the current resume (titles, dates, numbers).
- Every project has an image, tags, a one-line summary, and at least one working link where
  the code or app is public.
- Works at phone width; deep links survive a refresh on GitHub Pages.
- Accessible project modal (keyboard, focus, Escape to close).

## Acceptance criteria

- `npm run check` passes.
- No broken links or images.
- The site is no more than about a month behind the resume and `Current_Projects/`.

## Out of scope

Blog, CMS, analytics, contact form, backend.
