const { withNx } = require('@nx/rollup/with-nx');

module.exports = withNx(
  {
    main: 'libs/skill-mybuddy/src/index.ts',
    outputPath: 'dist/libs/skill-mybuddy',
    tsConfig: 'libs/skill-mybuddy/tsconfig.lib.json',
    compiler: 'swc',
    format: ['esm', "cjs"],
    assets: [
      {
        input: 'libs/skill-mybuddy/',
        glob: 'package.json',
        output: '.'
      },
      {
        input: 'libs/skill-mybuddy/src/',
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
