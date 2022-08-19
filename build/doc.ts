import baseConfig from './base';
import { defineConfig } from 'vite';
import base from './base';
import {resolve} from 'path'
const CopyWebpackPlugin = require('copy-webpack-plugin');

export default defineConfig({
  ...baseConfig,
  build: {
    outDir: 'docs',
  },
  plugins: [
    ...(baseConfig as any).plugins,
    new CopyWebpackPlugin({
        patterns: [
          {
            from: resolve(__dirname, './package'),
            to: resolve(__dirname, './docs/package')
          }
        ]
      })
  ]
});