import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
server: {
    host: '0.0.0.0',
    port: 3000,
    open: false,
    allowedHosts: true,
    proxy: {
      '/api': {
        target: 'https://mirofish-b2jn.onrender.com', // Dán trực tiếp link Render của bạn vào đây cho chắc
        changeOrigin: true,
        secure: false
      }
    }
  },
    }
  }
})
