import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    port: 3000, // Frontend port
    proxy: {
      // Proxy API requests to the backend
      '/api': {
        target: 'http://localhost:4000', // Backend port
        changeOrigin: true,
        secure: false,
      },
    },
  },
})