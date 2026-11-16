import type { TimelineItem } from "../types/timeline";

export const leadership: TimelineItem[] = [
  {
    id: "villanova-ultimate-captain",
    title: "Senior-Year Team Captain",
    org: "Villanova Club Ultimate Frisbee",
    orgLogo: "/Content/villanova.png",
    location: "Villanova, PA",
    date: "August 2023 — Present",
    bullets: [
      "Directed 20+ athletes as senior captain, developing training methodology, game strategy, and performance planning.",
      "Led game-day preparation and scouting for 5+ games per tournament over the course of the season.",
    ],
    tags: ["Leadership", "Strategy", "Scouting"],
  },
  {
    id: "novaracing",
    title: "Data Acquisition Member",
    org: "NovaRacing FSAE Club",
    orgLogo: "/Content/novaracing.png",
    location: "Villanova, PA",
    date: "December 2023 — December 2025",
    bullets: [
      "Optimized and calibrated telemetry and vehicle sensors across 10+ subsystems, ensuring signal accuracy.",
      "Validated 100+ telemetry signals against reference data to support vehicle performance analysis.",
    ],
    tags: ["Telemetry", "Sensors", "MoTeC"],
  },
];
