import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  server: {
    // 配置 history 模式的 fallback
    historyApiFallback: true
  }
})
