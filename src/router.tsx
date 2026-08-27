import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./components/layout/Layout";
import { Home } from "./pages/Home";
import { AboutPage } from "./pages/About";
import { Experience } from "./pages/Experience";
import { Projects } from "./pages/Projects";

export const router = createBrowserRouter(
  [
    {
      element: <Layout />,
      children: [
        { path: "/", element: <Home /> },
        { path: "/about", element: <AboutPage /> },
        { path: "/experience", element: <Experience /> },
        { path: "/projects", element: <Projects /> },
      ],
    },
  ],
  { basename: "/GuilletPersonalWebsite" },
);
