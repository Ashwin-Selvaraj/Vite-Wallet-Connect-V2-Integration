// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: ['ethers'],
  },
  build: {
    rollupOptions: {
      // DO NOT put ethers here unless you're using it as an external CDN/global import
      external: [], // leave empty
    },
    commonjsOptions: {
      include: [/ethers/, /node_modules/],
    },
  },
  resolve: {
    dedupe: ['ethers'],
  },
})
