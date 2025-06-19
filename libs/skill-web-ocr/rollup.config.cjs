const { withNx } = require('@nx/rollup/with-nx');

module.exports = withNx(
  {
    main: 'libs/skill-web-ocr/src/index.ts',
    outputPath: 'dist/libs/skill-web-ocr',
    tsConfig: 'libs/skill-web-ocr/tsconfig.lib.json',
    compiler: 'swc',
    format: ['esm', "cjs"],
    assets: [
      {
        input: 'libs/skill-web-ocr/',
        glob: 'package.json',
        output: '.'
      },
      {
        input: 'libs/skill-web-ocr/src/',
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
