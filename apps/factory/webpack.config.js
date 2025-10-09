const { NxAppWebpackPlugin } = require('@nx/webpack/app-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const { join } = require('path');

module.exports = {
  target: 'node',
  mode: process.env.NODE_ENV || 'production',

  output: {
    path: join(__dirname, '../../dist/apps/factory'),
    clean: true,
  },

  plugins: [
    new NxAppWebpackPlugin({
      compiler: 'tsc',
      main: './src/main.ts',
      tsConfig: './tsconfig.app.json',
      assets: [],
      optimization: false,
      outputHashing: 'none',
      generatePackageJson: true,
    }),

    new CopyWebpackPlugin({
      patterns: [
        { from: 'bin', to: 'bin' },
        { from: './src/assets', to: 'src/app/assets', noErrorOnMissing: true },
        { from: 'src/app/app.controller.ts', to: 'src/app/app.controller.ts' },
        { from: 'src/app/app.service.ts', to: 'src/app/app.service.ts' },
        { from: 'src/app/app.module.ts', to: 'src/app/app.module.ts' },
      ],
    }),
  ],
};
