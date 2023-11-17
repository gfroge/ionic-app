import legacy from '@vitejs/plugin-legacy'
import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'

const path = require('path')
const pathSrc = path.resolve(__dirname, './src')

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    legacy()
  ],
  resolve: {
    alias: {
      '@': pathSrc,
      '~': pathSrc
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @import '~/app/styles/variables';
          @import '~/app/styles/mixins';
          @import '~/app/styles/typography';
        `,
      },
    },
  },
})
