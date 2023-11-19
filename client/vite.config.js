import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	resolve: {
		extensions: [".js", ".jsx", ".ts", ".tsx", ".json"],
		alias: {
			"@src": path.resolve(__dirname, "src")
		}
	}
})
