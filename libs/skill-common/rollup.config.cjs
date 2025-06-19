const { withNx } = require('@nx/rollup/with-nx');

module.exports = withNx(
  {
    main: 'libs/skill-common/src/index.ts',
    outputPath: 'dist/libs/skill-common',
    tsConfig: 'libs/skill-common/tsconfig.lib.json',
    compiler: 'swc',
    format: ['esm', "cjs"],
    assets: [
      {
        input: 'libs/skill-common/',
        glob: 'package.json',
        output: '.'
      },
      {
        input: 'libs/skill-common/src/',
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
