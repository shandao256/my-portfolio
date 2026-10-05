import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    // Set when the dev server starts or the site is built; shown as "Last updated".
    __BUILD_DATE__: JSON.stringify(new Date().toISOString()),
  },
})