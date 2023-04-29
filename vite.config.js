import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  transpileDependencies: true,
  base: './',
    publicPath: process.env.NODE_ENV === 'production'
        ? '/gh-pages-vue-deployment/'
        : '/'
})