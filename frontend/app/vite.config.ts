// frontend/app/vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    target: "es2022"
  },
  optimizeDeps: {
    // Pre-bundling this library is heavy; better to exclude it.
    exclude: ["@huggingface/transformers"]
  }
});
