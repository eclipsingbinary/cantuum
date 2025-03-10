import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    strictPort: true,
    host: true
  },
  resolve: {
    alias: {
      'stream': 'stream-browserify',
      'buffer': 'buffer',
      '@': resolve(__dirname, 'src')
    }
  },
  optimizeDeps: {
    esbuildOptions: {
      target: 'esnext',
      supported: { 
        bigint: true 
      },
    },
    include: ['buffer', 'stream-browserify']
  },
  define: {
    global: 'globalThis',
    'process.env': {}
  },
  build: {
    commonjsOptions: {
      include: []
    },
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', '@emotion/react']
        }
      }
    }
  }
})
