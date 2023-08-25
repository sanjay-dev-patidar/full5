import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: '/frontend/src/main.jsx', // Update this with your entry module's path
    },
  },
});
