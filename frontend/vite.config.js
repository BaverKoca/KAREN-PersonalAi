import { defineConfig } from 'vite';

export default defineConfig({
  root: '.',
  publicDir: 'public',
  build: {
    outDir: 'dist',
    emptyOutDir: true,
  },
  server: {
    port: 5173,
    open: true,
    fs: {
      allow: ['.']
    }
  },
  appType: 'mpa', // treat as multi-page app so public/index.html is served
  // Fix for Vite 5+ to serve index.html from public for plain HTML/JS projects
  resolve: {
    alias: {
      '/src': '/src',
      '/public': '/public',
    },
  },
});
