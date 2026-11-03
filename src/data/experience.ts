import type { TimelineItem } from "../types/timeline";

export const experience: TimelineItem[] = [
  {
    id: "villanova-soccer-engineering-manager",
    title: "Student Engineering Manager",
    org: "Villanova Men's Soccer",
    orgLogo: "/Content/villanova.png",
    location: "Villanova, PA",
    date: "August 2026 — Present",
    bullets: [
      "Saved the coaching staff 10 hours a week by deploying a custom player performance platform (React, TypeScript, PostgreSQL, Clerk auth), built with Claude Code, that assesses the in-game performance of 25+ players.",
      "Gave the team a grading system built on 40+ coach-set standards, fed by a client-side Wyscout PDF pipeline that turns match reports into structured player data and visualizations.",
    ],
    tags: ["React", "TypeScript", "PostgreSQL", "Clerk"],
  },
  {
    id: "construct-connect",
    title: "Software Engineer Intern",
    org: "ConstructConnect",
    orgLogo: "/Content/ConstructConnect.jpg",
    location: "Atlanta, GA",
    date: "June 2026 — July 2026",
    bullets: [
      "Improved recall and precision for a Named Entity Recognition (NLP) model by over 20% by engineering a synthetic data pipeline with feature extraction and statistical optimization on construction specification documents.",
      "Sped up a monthly SFTP data-ingestion workflow by 400% by parallelizing across multiple client servers and files at once.",
    ],
    tags: ["Python", "NLP", "Synthetic Data"],
  },
  {
    id: "villanova-math-tutor",
    title: "Math Tutor",
    org: "Villanova Math Center",
    orgLogo: "/Content/villanova.png",
    location: "Villanova, PA",
    date: "June 2025 — Present",
    bullets: [
      "Tutored 20+ students across 4 courses (Accounting, Finance, Calculus, Linear Algebra), turning the math behind machine learning into step-by-step walkthroughs.",
    ],
    tags: ["Calculus", "Linear Algebra", "Accounting", "Finance"],
  },
  {
    id: "hoa-forward-deployed-intern",
    title: "Forward Deployed Software Engineer Intern",
    org: "HomeOwners Advantage",
    orgLogo: "/Content/HOALogo.png",
    location: "Atlanta, GA",
    date: "July 2025 — August 2025",
    bullets: [
      "Simplified data merging for the business team, enabling independent adoption and saving thousands of hours of manual work, by deploying a Flask-backed Python ETL pipeline as an automated data workflow.",
      "Consolidated 5+ disparate data sources into a single, unified data system, creating one analytics-ready workflow.",
    ],
    tags: ["Python", "Flask", "ETL"],
  },
];
