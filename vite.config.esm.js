import { defineConfig } from "vite";

export default defineConfig({
  build: {
    lib: {
      entry: "src/main.js",
      formats: ["es"],
      fileName: "bundle",
    },
    rollupOptions: {
      output: {
        dir: "dist-esm",
      },
    },
  },
});
