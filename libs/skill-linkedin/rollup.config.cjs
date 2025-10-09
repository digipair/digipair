const { withNx } = require('@nx/rollup/with-nx');
const cleanupPlugin = require('../../tools/rollup-plugins/cleanup');

module.exports = withNx(
  {
    main: './src/index.ts',
    outputPath: './dist',
    tsConfig: './tsconfig.lib.json',
    compiler: 'swc',
    format: ['esm', 'cjs'],
    external: [/@digipair\//],
    assets: [
      {
        input: 'libs/skill-linkedin/src/',
        glob: '*.json',
        output: '.',
      },
      {
        input: 'libs/skill-linkedin/',
        glob: 'package.json',
        output: '.',
      },
    ],
  },
  {
    plugins: [cleanupPlugin()],
    // Provide additional rollup configuration here. See: https://rollupjs.org/configuration-options
    // e.g.
    // output: { sourcemap: true },
  },
);
