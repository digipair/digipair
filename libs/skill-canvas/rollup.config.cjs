const { withNx } = require('@nx/rollup/with-nx');

module.exports = withNx(
  {
    main: 'libs/skill-canvas/src/index.ts',
    outputPath: 'dist/libs/skill-canvas',
    tsConfig: 'libs/skill-canvas/tsconfig.lib.json',
    compiler: 'swc',
    format: ['esm', "cjs"],
    assets: [
      {
        input: 'libs/skill-canvas/',
        glob: 'package.json',
        output: '.'
      },
      {
        input: 'libs/skill-canvas/src/',
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
