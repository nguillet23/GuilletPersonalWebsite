export interface Project {
  num: string; // "001"
  title: string;
  image: string; // path under /Content
  tags: string[];
  shortDesc: string;
  details: string; // paragraphs, split on \n\n when rendered
  github?: string;
  dashboard?: string;
  live?: string;
}
