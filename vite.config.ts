import { defineConfig, resolveBaseUrl } from "vite";
import vue from "@vitejs/plugin-vue";
import Markdown from "vite-plugin-md";
import Components from "unplugin-vue-components/vite";
import { VantResolver } from "unplugin-vue-components/resolvers";
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src"),
      'packages': resolve(__dirname, "./packages"),
    },
  },
  plugins: [
    vue({ include: [/\.vue$/, /\.md$/] }),
    Markdown(),
    Components({
      resolvers: [VantResolver()],
    }),
  ],
});
