const { withNx } = require('@nx/rollup/with-nx');

module.exports = withNx(
  {
    main: 'libs/skill-linkedin/src/index.ts',
    outputPath: 'dist/libs/skill-linkedin',
    tsConfig: 'libs/skill-linkedin/tsconfig.lib.json',
    compiler: 'swc',
    format: ['esm', "cjs"],
    assets: [
      {
        input: 'libs/skill-linkedin/',
        glob: 'package.json',
        output: '.'
      },
      {
        input: 'libs/skill-linkedin/src/',
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
