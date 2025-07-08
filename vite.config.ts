import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist', // <-- Viktigt för Vercel
  },
  server: {
    port: 5173
  }
});