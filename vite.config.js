import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
    server: {
        port: 5300
    },
    preview: {
        port: 5555
    },
    plugins: [react()],
    resolve: {
        extensions: [".js", ".jsx", ".ts", ".tsx", ".json"],
        alias: {
            "@src": path.resolve(__dirname, "src")
        }
    },
    css: {
        modules: {
            generateScopedName: "[local]__[hash:base64:5]"
        }
    }
});
