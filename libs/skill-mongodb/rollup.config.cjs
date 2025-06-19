const { withNx } = require('@nx/rollup/with-nx');

module.exports = withNx(
  {
    main: 'libs/skill-mongodb/src/index.ts',
    outputPath: 'dist/libs/skill-mongodb',
    tsConfig: 'libs/skill-mongodb/tsconfig.lib.json',
    compiler: 'swc',
    format: ['esm', "cjs"],
    assets: [
      {
        input: 'libs/skill-mongodb/',
        glob: 'package.json',
        output: '.'
      },
      {
        input: 'libs/skill-mongodb/src/',
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
