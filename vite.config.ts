import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0', // This allows Vite to listen on all network interfaces
    port: 5173,     // Ensure this is the port Vite is using
    proxy: {
      '/api': {
        target: 'https://server-z0w0.onrender.com/api/v1',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
})


// vite.con