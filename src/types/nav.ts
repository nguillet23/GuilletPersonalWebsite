export interface NavLink {
  label: string;
  path: string; // route path, e.g. "/about"
}

export interface SocialLink {
  label: string;
  href: string;
  icon: "github" | "linkedin" | "email";
}
