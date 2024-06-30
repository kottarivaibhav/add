import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/kottarivaibhav.github.io/', // Base URL for your GitHub Pages site
  build: {
    outDir: 'dist', // Output directory
    assetsDir: 'assets' // Assets directory
  }
});
