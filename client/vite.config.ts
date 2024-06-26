import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	resolve: {
		extensions: [".mjs", ".js", ".mts", ".ts", ".d.ts" , ".jsx", ".tsx", ".json"],
		alias: [{ find: "@src", replacement: path.resolve(__dirname, "src") }]
	}
});
