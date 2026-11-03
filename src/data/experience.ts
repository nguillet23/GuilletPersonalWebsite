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
      "Built and deployed a full-stack player performance platform (React, TypeScript, PostgreSQL) used by the coaching staff to grade 20+ players each match against position-specific standards.",
      "Engineered a client-side Wyscout PDF ingestion pipeline and secured the app with Clerk authentication and PostgreSQL Row Level Security, enforcing role-based access for 30+ users.",
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
      "Engineered a synthetic data pipeline with feature extraction and statistical optimization, improving a Named Entity Recognition (NLP) model's recall and precision on construction specification documents by over 20%.",
      "Sped up an SFTP process by over 400% through parallelization, while improving validation accuracy.",
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
      "Tutored 20+ students across 4 courses (Accounting, Finance, Calculus, Linear Algebra) using data-driven problem solving.",
      "Turned abstract Calculus and Linear Algebra concepts into step-by-step walkthroughs across 15+ months of tutoring.",
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
      "Deployed a Flask-backed Python ETL pipeline and demoed it to the business team in non-technical terms, enabling independent adoption and saving thousands of hours of manual data merging.",
      "Consolidated 5+ data sources into one automated workflow, replacing manual merging for the business team.",
    ],
    tags: ["Python", "Flask", "ETL"],
  },
];
