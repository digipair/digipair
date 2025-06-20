const { withNx } = require('@nx/rollup/with-nx');

module.exports = withNx(
  {
    main: 'libs/engine-use/src/index.ts',
    outputPath: 'dist/libs/engine-use',
    tsConfig: 'libs/engine-use/tsconfig.lib.json',
    compiler: 'swc',
    format: ['esm', "cjs"],
    assets: [
      {
        input: 'libs/engine-use/',
        glob: 'package.json',
        output: '.'
      },
      {
        input: 'libs/engine-use/src/',
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
