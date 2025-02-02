import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/",
  plugins: [react()],
  server: {
    open: "/playground/",
    proxy: { 
      '/api': 'http://localhost:4000',
    }
  },

})
