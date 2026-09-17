import type { Project } from "../types/project";

export const projects: Project[] = [
  {
    num: "001",
    title: "XR Lacrosse Goalie Training",
    image: "/Content/Lacrosse.png",
    tags: ["Python", "C#", "Unity", "MagicLeap", "VIVE Trackers"],
    shortDesc: "Extended-reality training system for lacrosse goalies.",
    details:
      "An extended-reality training system for lacrosse goalies built with Unity, MagicLeap, and VIVE Trackers. The system provides real-time spatial feedback during drills, overlaying virtual shot trajectories and scoring zones onto the physical crease.\n\nThe data pipeline (Python) streams tracker positions into the Unity scene at low latency, while C# scripts handle game-logic, scoring, and session recording. Built as a senior design project at Villanova.",
    github: "https://github.com/xrlacrosse-nova/NovaXRLacrosse",
  },
  {
    num: "002",
    title: "HOA Macros",
    image: "/Content/HOA.png",
    tags: ["Python", "HTML", "TypeScript"],
    shortDesc: "Automation tooling for HOA document processing.",
    details:
      "Automation tooling that drastically reduced the manual overhead of HOA document processing. Python scripts parse and extract structured data from PDFs and Word documents, feeding a lightweight TypeScript/HTML dashboard for review and export.\n\nThe workflow handles violation letters, dues statements, and meeting minutes — cutting processing time from hours to minutes per batch.",
    github: "https://github.com/nguillet23/HOA",
  },
  {
    num: "003",
    title: "Frisbee Valuation",
    image: "/Content/Frisbee.png",
    tags: ["Python", "Pandas", "Statistics"],
    shortDesc: "Statistical model for evaluating ultimate frisbee players.",
    details:
      "A statistical model for evaluating player and team performance in ultimate frisbee using play-by-play data. Inspired by WAR and other advanced sports metrics, the model assigns value to individual actions (completions, turnovers, goals, assists) weighted by field position and game context.\n\nBuilt entirely in Python with Pandas and NumPy, with visualisation outputs for player comparison and season-over-season trend analysis.",
    github: "https://github.com/nguillet23/Frisbee-Valuation",
    dashboard: "https://nguillet23.github.io/Frisbee-Valuation/",
  },
  {
    num: "004",
    title: "Baseball Analysis",
    image: "/Content/Baseball.png",
    tags: ["Python", "HTML", "Statcast", "Data Viz"],
    shortDesc: "Data pipeline and visualisation toolkit for MLB Statcast data.",
    details:
      "A data pipeline and visualisation toolkit for aggregating and exploring MLB Statcast data. Pulls from the Baseball Savant API, normalises multi-season datasets, and surfaces trends — pitch mix evolution, exit velocity distributions, spray charts — through an HTML report layer.\n\nThe pipeline is modular by design, making it easy to swap in new seasons or focus on specific teams and players.",
    github: "https://github.com/nguillet23/Guillet-Baseball-Analysis",
    dashboard: "https://nguillet23.github.io/Guillet-Baseball-Analysis/",
  },
  {
    num: "005",
    title: "Mario Kart ELO",
    image: "/Content/MarioKartELO.jpg",
    tags: ["React", "TypeScript", "Vite", "Supabase"],
    shortDesc:
      "A friend-group Mario Kart Grand Prix tracker with a chess-style Elo rating per player.",
    details:
      "A friend-group Mario Kart Grand Prix tracker with a chess-style Elo rating per player. Grand Prix results feed automatic rating calculations, with rating floor constraints and stale-rating guards to keep the data consistent.\n\nBuilt with React, TypeScript, and Vite on the frontend with a Supabase (Postgres) backend for real-time leaderboard updates. Includes a leaderboard, head-to-head matchup comparisons, an analytics dashboard with player profiles, streak and rival tracking, and shareable PNG result cards — all password-gated for write operations and deployed to GitHub Pages via CI/CD.",
    github: "https://github.com/nguillet23/MarioKartELO",
    dashboard: "https://nguillet23.github.io/MarioKartELO/",
  },
];
