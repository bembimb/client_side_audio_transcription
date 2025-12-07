import { defineConfig } from "vite";

export default defineConfig({
  base: "/frontend_vite_template/",

  assetsInclude: ["**/*.wasm"],

  resolve: {
    alias: {
      "react-native": "react-native-web"
    }
  },

  optimizeDeps: {
    exclude: ["react-native"]
  },

  build: {
    outDir: "dist",
    emptyOutDir: true,
    commonjsOptions: {
      transformMixedEsModules: true
    }
  }
});
