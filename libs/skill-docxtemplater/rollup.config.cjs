const { withNx } = require('@nx/rollup/with-nx');

module.exports = withNx(
  {
    main: 'libs/skill-docxtemplater/src/index.ts',
    outputPath: 'dist/libs/skill-docxtemplater',
    tsConfig: 'libs/skill-docxtemplater/tsconfig.lib.json',
    compiler: 'swc',
    format: ['esm', "cjs"],
    assets: [
      {
        input: 'libs/skill-docxtemplater/',
        glob: 'package.json',
        output: '.'
      },
      {
        input: 'libs/skill-docxtemplater/src/',
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
