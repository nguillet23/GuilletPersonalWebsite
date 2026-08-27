export interface TimelineItem {
  id: string;
  title: string; // role or degree
  org: string; // company or school
  orgLogo: string;
  location?: string;
  date: string; // "June 2026 — July 2026"
  bullets?: string[];
  tags: string[];
}
