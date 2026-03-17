import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    host: '0.0.0.0',
    port: 3000,
    strictPort: true,
    open: false,
    allowedHosts: 'all', // Cho phép tất cả các host để không bao giờ bị lỗi màn hình đen nữa
    proxy: {
      '/api': {
        target: 'https://mirofish-b2jn.onrender.com',
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/api/, '') // Thêm dòng này để khớp với cấu hình Backend của dự án
      }
    }
  }
})
