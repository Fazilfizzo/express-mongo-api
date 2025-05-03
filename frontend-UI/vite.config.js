import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // Enables access from network
    allowedHosts: [
      '5173-fazilfizzo-expressmongo-a702hz5yehe.ws-eu118.gitpod.io'
    ]
  }
})
