const { withNx } = require('@nx/rollup/with-nx');
const cleanupPlugin = require('../../tools/rollup-plugins/cleanup');
const { join } = require('path');

module.exports = withNx(
  {
    main: './src/index.ts',
    outputPath: './dist',
    tsConfig: './tsconfig.lib.json',
    compiler: 'swc',
    format: ['esm', 'cjs'],
    assets: [
      {
        input: join(__dirname, 'src'),
        glob: '*.json',
        output: '.',
      }
    ]
  },
  {
    plugins: [cleanupPlugin()],
    // Provide additional rollup configuration here. See: https://rollupjs.org/configuration-options
    // e.g.
    // output: { sourcemap: true },
  },
);
