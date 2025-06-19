const { withNx } = require('@nx/rollup/with-nx');

module.exports = withNx(
  {
    main: 'libs/skill-oauth2/src/index.ts',
    outputPath: 'dist/libs/skill-oauth2',
    tsConfig: 'libs/skill-oauth2/tsconfig.lib.json',
    compiler: 'swc',
    format: ['esm', "cjs"],
    assets: [
      {
        input: 'libs/skill-oauth2/',
        glob: 'package.json',
        output: '.'
      },
      {
        input: 'libs/skill-oauth2/src/',
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
