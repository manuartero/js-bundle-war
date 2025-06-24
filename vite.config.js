import { defineConfig } from "vite";

export default defineConfig({
  build: {
    target: "modules", // es2015+
    outDir: "dist",
  },
});
