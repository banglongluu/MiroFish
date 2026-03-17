import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    host: '0.0.0.0',
    port: 3000,
    open: false, // Dòng này để sửa lỗi spawn xdg-open
    allowedHosts: true, // Dòng này để sửa lỗi Blocked host ban nãy
    // ... các dòng khác giữ nguyên
  },
    }
  }
})
