import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/CyberSecurity_Tools/' // GitHub repo name as base path
})
