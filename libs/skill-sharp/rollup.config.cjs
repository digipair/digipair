const { withNx } = require('@nx/rollup/with-nx');

module.exports = withNx(
  {
    main: 'libs/skill-sharp/src/index.ts',
    outputPath: 'dist/libs/skill-sharp',
    tsConfig: 'libs/skill-sharp/tsconfig.lib.json',
    compiler: 'swc',
    format: ['esm', "cjs"],
    assets: [
      {
        input: 'libs/skill-sharp/',
        glob: 'package.json',
        output: '.'
      },
      {
        input: 'libs/skill-sharp/src/',
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
