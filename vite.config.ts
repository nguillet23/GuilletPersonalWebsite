import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Repo is served from https://nguillet23.github.io/GuilletPersonalWebsite/
export default defineConfig({
  plugins: [react()],
  base: "/GuilletPersonalWebsite/",
});
