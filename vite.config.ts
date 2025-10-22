import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Sitemap from 'vite-plugin-sitemap'
// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
      Sitemap({
          hostname: 'https://hacktrinidadforward.io/',
          dynamicRoutes:[
              '/',
              '/register',
              '/about'
          ],
      })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
})
