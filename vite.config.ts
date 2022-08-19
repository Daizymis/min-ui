import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Markdown from 'vite-plugin-md'
import path from 'path'
import Components from 'unplugin-vue-components/vite';
import { VantResolver } from 'unplugin-vue-components/resolvers';

// https://vitejs.dev/config/
export default defineConfig({
  resolve:{
    alias: {
      '@': path.resolve(__dirname, 'src'),
      'packages': path.resolve(__dirname, 'packages'),
    }
  },
  plugins: [
    vue({ include: [/\.vue$/, /\.md$/] }), 
    Markdown(),
    Components({
      resolvers: [VantResolver()],
    }),
  ]
})
