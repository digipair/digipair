const { withNx } = require('@nx/rollup/with-nx');

module.exports = withNx(
  {
    main: 'libs/skill-s3/src/index.ts',
    outputPath: 'dist/libs/skill-s3',
    tsConfig: 'libs/skill-s3/tsconfig.lib.json',
    compiler: 'swc',
    format: ['esm', "cjs"],
    assets: [
      {
        input: 'libs/skill-s3/',
        glob: 'package.json',
        output: '.'
      },
      {
        input: 'libs/skill-s3/src/',
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
