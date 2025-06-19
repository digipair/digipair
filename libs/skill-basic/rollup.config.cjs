const { withNx } = require('@nx/rollup/with-nx');

module.exports = withNx(
  {
    main: 'libs/skill-basic/src/index.ts',
    outputPath: 'dist/libs/skill-basic',
    tsConfig: 'libs/skill-basic/tsconfig.lib.json',
    compiler: 'swc',
    format: ['esm', "cjs"],
    assets: [
      {
        input: 'libs/skill-basic/',
        glob: 'package.json',
        output: '.'
      },
      {
        input: 'libs/skill-basic/src/',
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
