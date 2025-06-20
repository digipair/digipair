const { withNx } = require('@nx/rollup/with-nx');

module.exports = withNx(
  {
    main: 'libs/skill-microsoft/src/index.ts',
    outputPath: 'dist/libs/skill-microsoft',
    tsConfig: 'libs/skill-microsoft/tsconfig.lib.json',
    compiler: 'swc',
    format: ['esm', "cjs"],
    assets: [
      {
        input: 'libs/skill-microsoft/',
        glob: 'package.json',
        output: '.'
      },
      {
        input: 'libs/skill-microsoft/src/',
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
