import svgr from "@svgr/rollup";
import react from "@vitejs/plugin-react";
import { resolve } from "path";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import eslint from "vite-plugin-eslint";
import tsConfigPaths from "vite-tsconfig-paths";
// import * as packageJson from "../package.json";

export default defineConfig(() => ({
  envDir: "./env",
  // define: {
  //   "process.env": process.env,
  // },
  plugins: [
    eslint(),
    react(),
    svgr(),
    tsConfigPaths(),
    dts({
      include: ["src"],
    }),
  ],
  resolve: {
    alias: {
      "@": resolve(__dirname, "../src"),
      "@/assets": resolve(__dirname, "../src/assets"),
      "@/constants": resolve(__dirname, "../src/constants"),
      "@/components": resolve(__dirname, "../src/components"),
      "@/hooks": resolve(__dirname, "../src/hooks"),
      "@/stories": resolve(__dirname, "../src/stories"),
      "@/utils": resolve(__dirname, "../src/utils"),
    },
  },
}));
