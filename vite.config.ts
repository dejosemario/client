import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";


export default defineConfig({
  plugins: [react()],
  server: {
    host: "0.0.0.0", // This allows Vite to listen on all network interfaces
    port: 5173, // Ensure this is the port Vite is using
    proxy: {
      "/api": {
        target: process.env.VITE_BACKEND_URL || "http://localhost:8000/api/v1",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
});
