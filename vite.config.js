import {defineConfig} from "vite"
import react from "@vitejs/plugin-react"
import svgr from "vite-plugin-svgr"
import path from "path"

export default defineConfig({
  plugins: [
    react(),
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
  css: {
    // preprocessorOptions: {
    //   scss: {
    //     additionalData: `@import "./src/index.scss";`,
    //   },
    // },
  },
})
