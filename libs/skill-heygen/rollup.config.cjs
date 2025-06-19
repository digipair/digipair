const { withNx } = require('@nx/rollup/with-nx');

module.exports = withNx(
  {
    main: 'libs/skill-heygen/src/index.ts',
    outputPath: 'dist/libs/skill-heygen',
    tsConfig: 'libs/skill-heygen/tsconfig.lib.json',
    compiler: 'swc',
    format: ['esm', "cjs"],
    assets: [
      {
        input: 'libs/skill-heygen/',
        glob: 'package.json',
        output: '.'
      },
      {
        input: 'libs/skill-heygen/src/',
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
