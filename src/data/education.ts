import type { TimelineItem } from "../types/timeline";

export const education: TimelineItem[] = [
  {
    id: "villanova-ms",
    title: "Villanova University",
    org: "M.S. Sports and Performance Engineering",
    orgLogo: "/Content/villanova.png",
    date: "Expected 2028",
    tags: ["Graduate School"],
  },
  {
    id: "villanova-bs",
    title: "Villanova University",
    org: "B.S. Computer Engineering",
    orgLogo: "/Content/villanova.png",
    location: "Tech GPA: 3.9/4.0",
    date: "Expected 2027",
    bullets: [
      "Dean's List: All Semesters",
      "Minors: Computer Science, Mathematics, Business",
    ],
    tags: ["Dean's List", "Computer Engineering"],
  },
  {
    id: "sfhs",
    title: "Saint Francis High School",
    org: "Graduated",
    orgLogo: "/Content/SFHS.png",
    location: "GPA: 4.0/4.0",
    date: "Class of 2023",
    bullets: ["Graduated top 10% of the class"],
    tags: ["Beta Club", "National Honors Society"],
  },
];
