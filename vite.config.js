import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { viteSingleFile } from 'vite-plugin-singlefile'

// `npm run build` makes a normal build for Vercel.
// SINGLEFILE=1 inlines everything into one html file (handy for sharing a preview).
export default defineConfig(() => ({
  plugins: [react(), ...(process.env.SINGLEFILE ? [viteSingleFile()] : [])],
}))
