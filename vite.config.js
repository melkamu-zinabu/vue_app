import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// import { vuetify } from './src/plugins/vuetify.js'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    // vuetify({ autoImport: true }), // Enabled by default
  ]
})
