import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  // base: './',
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src')
    }
  },
  server: {
    // host: 'localhost',
    port: 8009,
    open: false,
    proxy: {
      // '/api': {
      //   target: 'http://39.103.182.193',
      //   changeOrigin: true,
      //   ws: true,
      //   pathRewrite: {
      //     '^/api': 'api'
      //   }
      // }
    }
  }
})
