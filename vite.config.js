import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// module.exports = {
//   publicPath: process.env.NODE_ENV === "production" ? "/page/" : "/",
// };

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('src', import.meta.url))
    }
  },
  // server: {
  //   port: '8080'
  // },
  // publicPath: process.env.NODE_ENV === "production" ? "/page/" : "/",


})