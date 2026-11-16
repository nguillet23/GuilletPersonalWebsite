import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./components/layout/Layout";
import { Hero } from "./components/hero/Hero";
import { About } from "./components/about/About";
import { Experience } from "./pages/Experience";
import { ProjectGrid } from "./components/projects/ProjectGrid";

export const router = createBrowserRouter(
  [
    {
      element: <Layout />,
      children: [
        { path: "/", element: <Hero /> },
        { path: "/about", element: <About /> },
        { path: "/experience", element: <Experience /> },
        { path: "/projects", element: <ProjectGrid /> },
      ],
    },
  ],
  // Follows `base` in vite.config.ts, so the repo name lives in one place.
  { basename: import.meta.env.BASE_URL.replace(/\/$/, "") || "/" },
);
