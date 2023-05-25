import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '^/(users|items)': {
        target: 'https://bistro-boss-server2.vercel.app',
        changeOrigin: true,
        secure: false,
        // rewrite: (path) => path.replace(/^\/users/, ''),
        ws: true
      },
    },
  }
})
