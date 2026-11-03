import type { Project } from "../types/project";

export const projects: Project[] = [
  {
    num: "001",
    title: "XR Lacrosse Goalie Training",
    image: "/Content/Lacrosse.png",
    tags: ["C#", "Unity", "Magic Leap 2", "XR"],
    shortDesc: "A Magic Leap 2 reaction-training simulator for lacrosse goalies.",
    details:
      "A Magic Leap 2 reaction-training simulator for lacrosse goalies, built as my senior capstone at Villanova. A virtual shooter fires on-target shots at random points in the corners of a virtual goal, and the goalie saves them with their real stick, which has the Magic Leap 2 controller mounted on it. The virtual floor lines up with the real floor, so shots arrive where a real shot would.\n\nBuilt in Unity 6 and C# on the Magic Leap Unity SDK, integrating 5+ real-time components (head and controller tracking, the animated shooter, ball flight, save detection, and voice and controller input). The real-time pipeline was optimized to 20 ms end-to-end latency so the simulation matches true game speed. After each session the headset shows where every shot went and which ones got past, and saves the results to that player's history.",
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
    title: "Ultimate Frisbee Analytics",
    image: "/Content/Frisbee.png",
    tags: ["Python", "Pandas", "XGBoost", "PyTorch", "SHAP"],
    shortDesc:
      "Advanced stats and machine-learning models for evaluating ultimate frisbee players.",
    details:
      "Statistical models for evaluating player and team performance in ultimate frisbee. The first, a valuation model inspired by WAR and other advanced sports metrics, assigns value to individual actions (completions, turnovers, goals, assists) weighted by field position and game context, with visualizations for player comparison and season-over-season trends.\n\nThe second goes further on the full 2026 UFA season: play-by-play for all 144 games, pulled from the league's stats API with the undocumented event codes worked out by cross-checking against team totals. Player archetypes come from clustering, and a composite efficiency rating has its weights learned by regression against team scoring. An XGBoost model with SHAP explanations, compared against a regression baseline and a PyTorch model, predicts each player's rating before a game. It's evaluated on a leak-free train/validation/holdout split and a weekly walk-forward backtest, which showed single-game standout predictions are mostly noise-limited (F1 of 0.53 against a ceiling of about 0.61).",
    github: "https://github.com/nguillet23/Frisbee-Valuation",
    dashboard: "https://nguillet23.github.io/Frisbee-Valuation/",
  },
  {
    num: "004",
    title: "Baseball Analysis",
    image: "/Content/Baseball.png",
    tags: ["Python", "Linear Regression", "Statcast", "Data Viz"],
    shortDesc: "Predictive models and visualizations built on 3,000+ MLB seasons of data.",
    details:
      "Predictive models built with linear regression and feature selection across 3,000+ MLB seasons and 500+ players, supporting data-driven investment analysis for $100M+ decisions.\n\nA Python pipeline pulls MLB Statcast data from the Baseball Savant API, normalizes multi-season datasets, and surfaces trends (pitch mix evolution, exit velocity distributions, spray charts) through an HTML report published online for non-technical readers.",
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
  {
    num: "006",
    title: "Huck It",
    image: "/Content/HuckIt.png",
    tags: ["TypeScript", "React", "Canvas", "Vitest", "Game Dev"],
    shortDesc:
      "A top-down browser game that teaches new ultimate frisbee players how to play offense.",
    details:
      "A 2D, top-down browser game that teaches brand-new ultimate frisbee players how to play offense against a CPU person-to-person defense. From above, players can see what's hard to see from the sideline: spacing, open lanes, the force, and how cuts create space.\n\nThe game logic is a pure TypeScript simulation (field, possessions, stall count, defense, lineups) kept separate from rendering and covered by Vitest unit tests; the canvas drawing is hand-built, with React for screens and menus. The live field preview already runs a full possession: throw to teammates or open space while the marker counts the stall and applies the force. In development: AI vertical-stack cutters, leading passes, cuts you call by dragging a player, stats, coach tips, and slow-motion turnover replays, with guided lessons and a play whiteboard to follow. Every push runs lint, tests and the build in GitHub Actions before deploying to GitHub Pages.",
    github: "https://github.com/nguillet23/huckit",
    live: "https://nguillet23.github.io/huckit/",
  },
  {
    num: "007",
    title: "Nova Soccer Player Report Cards",
    tags: ["React", "TypeScript", "PostgreSQL", "Clerk", "Row Level Security"],
    shortDesc:
      "A performance platform the Villanova Men's Soccer staff use to grade every player, every match.",
    details:
      "A web app for the Villanova Men's Soccer coaching staff and players. A coach uploads a Wyscout match report PDF, which is parsed entirely in the browser, matched to the roster, and reviewed and confirmed before it's saved. Each player's Performance Card then grades their games and season against position-specific standards the coaches set, with a radar chart, per-category grades, and an A–D overall grade.\n\nBuilt with React 19, TypeScript, and Vite, on Neon Postgres queried straight from the browser. Clerk handles invite-only sign-in with coach and player roles, and PostgreSQL Row Level Security is the real access control: players see only their own card. Coaches also get a standards editor, player comparisons, team stats, roster management, and a season selector.\n\nThis is a private project for the team, so the code and app aren't public.",
  },
];
