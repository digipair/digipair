const { withNx } = require('@nx/rollup/with-nx');

module.exports = withNx(
  {
    main: 'libs/skill-tensorflow/src/index.ts',
    outputPath: 'dist/libs/skill-tensorflow',
    tsConfig: 'libs/skill-tensorflow/tsconfig.lib.json',
    compiler: 'swc',
    format: ['esm', "cjs"],
    assets: [
      {
        input: 'libs/skill-tensorflow/',
        glob: 'package.json',
        output: '.'
      },
      {
        input: 'libs/skill-tensorflow/src/',
        glob: '*.json',
        output: '.'
      }
    ]
  },
  {
    // Provide additional rollup configuration here. See: https://rollupjs.org/configuration-options
    // e.g.
    // output: { sourcemap: true },
  }
);
