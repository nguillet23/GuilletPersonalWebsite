# Nicholas Guillet — Portfolio

Personal portfolio site built with Vite, React, and TypeScript. Live at
[nguillet23.github.io/GuilletPersonalWebsite](https://nguillet23.github.io/GuilletPersonalWebsite/).

## Stack

- **Vite + React + TypeScript** (`strict` mode)
- **React Router** for the four routes (`/`, `/about`, `/experience`, `/projects`)
- **CSS Modules** for component styling, with shared design tokens in `src/styles/tokens.css`
- **Vitest + React Testing Library** for component/hook tests
- **ESLint + Prettier** for linting and formatting

## Project structure

```
src/
  components/   # UI components, grouped by section (hero, about, timeline, projects, ui, layout)
  data/         # Typed content — projects, experience, education, skills, social links
  hooks/        # useScrollReveal, useProjectModal
  pages/        # Route-level composition (Experience); other routes render components directly
  types/        # Shared TypeScript interfaces for the data layer
  styles/       # Design tokens and global styles
public/
  Content/      # Images and resume served as static assets
```

## Scripts

| Command                | Description                          |
| ---------------------- | ------------------------------------ |
| `npm run dev`          | Start the Vite dev server            |
| `npm run build`        | Typecheck, then build to `dist/`     |
| `npm run preview`      | Preview the production build locally |
| `npm run typecheck`    | Run `tsc --noEmit`                   |
| `npm test`             | Run the test suite once              |
| `npm run test:watch`   | Run tests in watch mode              |
| `npm run lint`         | Run ESLint                           |
| `npm run format`       | Format the codebase with Prettier    |
| `npm run format:check` | Check formatting without writing     |

## Deployment

Pushes to `main` trigger `.github/workflows/deploy.yml`, which builds the site and deploys `dist/`
to GitHub Pages via `actions/deploy-pages`. `dist/index.html` is also copied to `dist/404.html` so
client-side routes survive a hard refresh.
