import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import url from "url";

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src/"),
      "@assets": `${path.resolve(__dirname, "./src/assets/")}`,
      "@common": `${path.resolve(__dirname, "./src/common/")}`,
      "@components": `${path.resolve(__dirname, "./src/components/")}`,
      "@store": `${path.resolve(__dirname, "./src/store/")}`,
      "@styles": `${path.resolve(__dirname, "./src/styles/")}`,
      "@utils": `${path.resolve(__dirname, "./src/utils/")}`,
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "./src/styles/_variables.scss";
          @import "./src/styles/_colors.scss";
          `,
      },
    },
  },
});
