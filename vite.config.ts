import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // TODO: Fix this to avoid error with socket 
    port: 8080, 
  },
})
