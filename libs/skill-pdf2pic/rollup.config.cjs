const { withNx } = require('@nx/rollup/with-nx');

module.exports = withNx(
  {
    main: 'libs/skill-pdf2pic/src/index.ts',
    outputPath: 'dist/libs/skill-pdf2pic',
    tsConfig: 'libs/skill-pdf2pic/tsconfig.lib.json',
    compiler: 'swc',
    format: ['esm', "cjs"],
    assets: [
      {
        input: 'libs/skill-pdf2pic/',
        glob: 'package.json',
        output: '.'
      },
      {
        input: 'libs/skill-pdf2pic/src/',
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
