// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// ⚠️ change <your-repo-name> to your actual repo name on GitHub
export default defineConfig({
  plugins: [react()],
  base: '/my-portfolio/', 
})
