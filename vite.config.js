import { sentryVitePlugin } from "@sentry/vite-plugin";
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), sentryVitePlugin({
    org: "nothing-qc5",
    project: "javascript-react"
  })],

  esbuild: {
    target: ['es2022', 'chrome100', 'safari15'],  // Set target to support more modern features
  },

  build: {
    sourcemap: true
  }
})