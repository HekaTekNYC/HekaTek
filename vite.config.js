import {defineConfig} from "vite"
import react from "@vitejs/plugin-react"
import {terser} from "rollup-plugin-terser"
import viteCompression from "vite-plugin-compression"
import htmlPurge from "vite-plugin-html-purgecss"

export default defineConfig({
  plugins: [
    react(),
    htmlPurge(),
    viteCompression({
      verbose: true,
      disable: false,
      algorithm: "brotliCompress",
      ext: ".br",
      threshold: 10240,
    }),
    terser({
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    }),
  ],
  build: {
    minify: "terser",
    outDir: "build",
    rollupOptions: {
      output: {
        entryFileNames: `assets/[name].[hash].js`,
        chunkFileNames: `assets/[name].[hash].js`,
        assetFileNames: `assets/[name].[hash].[ext]`,
      },
    },
  },
  resolve: {
    alias: {
      "@": "/src",
    },
  },
  server: {
    host: "0.0.0.0",
    port: 3000,
    open: true,
    proxy: {
      "/api": {
        target: "http://localhost:3000",
        changeOrigin: true,
        rewrite: path => path.replace(/^\/api/, ""),
      },
    },
  },
})
