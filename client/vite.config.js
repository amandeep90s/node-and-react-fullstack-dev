import react from '@vitejs/plugin-react-swc';
import dotenv from 'dotenv';
import { defineConfig } from 'vite';

dotenv.config(); // Load environment from .env file

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: process.env.VITE_APP_SERVER_URL,
        changeOrigin: true,
      },
      '/auth': {
        target: process.env.VITE_APP_SERVER_URL,
        changeOrigin: true,
      },
    },
  },
});
