import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  base: "/",
  build: {
    chunkSizeWarningLimit: 1600,
    include: ["fancy-date"],
  },
  optimizeDeps: {
    // include: ["jquery", "bootstrap"],
    include: ["my-lib/components/**/*.vue"],
  },
  css: {
    assetsInclude: ["**/*.css", "**/*.scss", "**/*.sass"],
  },
  rollupOptions: {
    output: {
      manualChunks: false,
      inlineDynamicImports: true,
      entryFileNames: "[name].js", // currently does not work for the legacy bundle
      assetFileNames: "[name].[ext]", // currently does not work for images
    },
  },
});
