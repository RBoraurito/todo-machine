import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    watch: {
      // https://rollupjs.org/guide/en/#watch-options
      include: ['./src/hooks/*.js']
    }
  },
  plugins: [react()],
  base: '/todo-machine'
})
