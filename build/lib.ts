import { defineConfig, resolveBaseUrl } from 'vite'
import vue from '@vitejs/plugin-vue'
import Markdown from 'vite-plugin-md'
import path from 'path'
import Components from 'unplugin-vue-components/vite';
import { VantResolver } from 'unplugin-vue-components/resolvers';
import dts from 'vite-plugin-dts';
import { resolve } from 'path';
import baseConfig from './base';

// https://vitejs.dev/config/
export default defineConfig({
  ...baseConfig,
  build: {
    outDir: 'dist',
    lib: {
      entry: resolve(__dirname, '../packages/index.ts'),
      name: 'min-ui',
      fileName: (format) => `min-ui.${format}.js`,
    },
    rollupOptions: {
      // 确保外部化处理那些你不想打包进库的依赖
      external: ['vue'],
      output: {
        // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
        globals: {
          vue: 'Vue'
        }
      }
    }
  },
  plugins: [
    ...(baseConfig as any).plugins,
    dts(),
  ]
})
