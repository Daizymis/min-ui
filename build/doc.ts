import baseConfig from './base';
import { defineConfig } from 'vite';
import base from './base';
import {resolve} from 'path'
import copy from 'rollup-plugin-copy'

export default defineConfig({
  ...baseConfig,
  build: {
    outDir: 'docs',
  },
  plugins: [
    ...(baseConfig as any).plugins,
      copy({
        targets: [
          { src: 'packages/**', dest: 'docs/packages' },
        ]
      })
  ]
});