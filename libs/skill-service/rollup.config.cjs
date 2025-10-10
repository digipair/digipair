const { withNx } = require('@nx/rollup/with-nx');
const { join } = require('path');
const cleanupPlugin = require('../../tools/rollup-plugins/cleanup');
const pkg = require('./package.json');

const externals = [
  ...Object.keys(pkg.dependencies || {}),
  ...Object.keys(pkg.peerDependencies || {}),
  /@digipair\//
];

module.exports = withNx(
  {
    main: './src/index.ts',
    outputPath: './dist',
    tsConfig: './tsconfig.lib.json',
    compiler: 'swc',
    format: ['esm', 'cjs'],
    external: externals,
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
