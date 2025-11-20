import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    watch: {
      usePolling: true
    }
  },
  css: {
    modules: {
      localsConvention: 'camelCase', // Optional: Use camelCase for class names
    },
  }
})
