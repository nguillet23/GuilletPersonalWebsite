export interface NavLink {
  label: string;
  path: string; // route path, e.g. "/about"
}

export interface SocialLink {
  label: string;
  href: string;
  icon: "github" | "linkedin" | "email" | "school-email" | "phone";
  /** Shown on hover after the label, e.g. the address or number. */
  detail?: string;
}

/** Links that open another site get a new tab; mailto: and tel: links don't. */
export function isExternalLink(link: SocialLink): boolean {
  return link.href.startsWith("http");
}
