/**
 * Prefixes a public/ asset path with Vite's configured base
 * (see vite.config.ts `base`), so hardcoded paths like "/Content/x.png"
 * still resolve correctly when the site is served from a subpath
 * (GitHub Pages project sites, e.g. /GuilletPersonalWebsite/).
 */
export function asset(path: string): string {
  return `${import.meta.env.BASE_URL}${path.replace(/^\//, "")}`;
}
