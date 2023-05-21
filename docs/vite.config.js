import { defineConfig } from 'vite'

export default defineConfig({
  // setting server.hmr.overlay to false
  server: {
    hmr: {
      overlay: true
    }
  }

})