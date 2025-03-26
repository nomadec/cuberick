// eslint-disable-next-line import/namespace
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// eslint-disable-next-line import/no-unresolved
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
	plugins: [react(), tailwindcss()]
})
