# Architecture

## Stack

Vite 5 · React 18 · TypeScript (strict) · React Router 6 · CSS Modules · Vitest + RTL ·
ESLint + Prettier · GitHub Pages via Actions.

## Shape

```
index.html → src/main.tsx → src/router.tsx (createBrowserRouter, basename from Vite's base)
  └─ components/layout/Layout (Navbar + <Outlet/> + Footer)
       ├─ /            hero/Hero
       ├─ /about       about/About + SkillsGrid
       ├─ /experience  pages/Experience → timeline/TimelineColumn × 2 (experience, education)
       └─ /projects    projects/ProjectGrid → ProjectCard → ProjectModal (useProjectModal)
```

## Data model

All content is static, typed TypeScript in `src/data/`. There is no runtime fetching.

| File              | Type (`src/types/`) | Rendered by                    |
| ----------------- | ------------------- | ------------------------------ |
| `projects.ts`     | `Project`           | ProjectGrid / Card / Modal     |
| `experience.ts`   | `TimelineItem`      | TimelineColumn (left)          |
| `education.ts`    | `TimelineItem`      | TimelineColumn (right)         |
| `skills.ts`       | `Skill`             | SkillsGrid (devicon CDN icons) |
| `social-links.ts` | —                   | Hero, Footer                   |
| `profile.ts`      | `Profile`           | Hero (name, pitch), About bio  |

`Project` links are all optional: `github`, `dashboard`, `live`.

## Key boundaries

- **Content vs. UI:** updating the site means editing `src/data/` and `public/Content/`. A
  component only changes when the data shape changes.
- **Base path:** `/GuilletPersonalWebsite/` is set only by `base` in `vite.config.ts`.
  `src/lib/asset.ts` and the router `basename` both read it from `import.meta.env.BASE_URL`,
  so renaming the repo means changing `base` alone.
- **Hooks:** `useScrollReveal` (IntersectionObserver fade-in) and `useProjectModal`
  (open/close, scroll restore) are the only stateful logic and both are tested.
- **Deploy:** push to `main` → build → copy `index.html` to `404.html` → Pages.
