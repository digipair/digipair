const { withNx } = require('@nx/rollup/with-nx');

module.exports = withNx(
  {
    main: 'libs/skill-web-pdf/src/index.ts',
    outputPath: 'dist/libs/skill-web-pdf',
    tsConfig: 'libs/skill-web-pdf/tsconfig.lib.json',
    compiler: 'swc',
    format: ['esm', "cjs"],
    assets: [
      {
        input: 'libs/skill-web-pdf/',
        glob: 'package.json',
        output: '.'
      },
      {
        input: 'libs/skill-web-pdf/src/',
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
