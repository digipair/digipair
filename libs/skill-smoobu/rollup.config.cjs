const { withNx } = require('@nx/rollup/with-nx');

module.exports = withNx(
  {
    main: 'libs/skill-smoobu/src/index.ts',
    outputPath: 'dist/libs/skill-smoobu',
    tsConfig: 'libs/skill-smoobu/tsconfig.lib.json',
    compiler: 'swc',
    format: ['esm', "cjs"],
    assets: [
      {
        input: 'libs/skill-smoobu/',
        glob: 'package.json',
        output: '.'
      },
      {
        input: 'libs/skill-smoobu/src/',
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
