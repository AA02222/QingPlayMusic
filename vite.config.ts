import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc';
import { createSvgIconsPlugin } from "vite-plugin-svg-icons";
import { join } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    createSvgIconsPlugin({
      iconDirs: [join(__dirname,"./src/assets/icons")],
      symbolId: 'icon-[name]'
    })
  ],
  resolve: {
    alias: {
      '@': join(__dirname, './src'),
    }
  }
})
