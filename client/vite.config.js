import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import dotenv from 'dotenv';

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
      '/auth/google': {
        target: process.env.VITE_APP_SERVER_URL,
        changeOrigin: true,
      },
    },
  },
});
