import {defineConfig} from "vite"
import compress from "vite-plugin-compress"
import react from "@vitejs/plugin-react"
import svgr from "vite-plugin-svgr"
import path from "path"

export default defineConfig({
  plugins: [
    react(),
    compress(),
    svgr({
      exportAsDefault: true,
    }),
  ],
  server: {
    host: "0.0.0.0",
    port: 3000,
    open: true,
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  build: {
    outDir: "dist",
    sourcemap: true,
  },
  css: {},
})
