const { withNx } = require('@nx/rollup/with-nx');

module.exports = withNx(
  {
    main: 'libs/skill-qrcode/src/index.ts',
    outputPath: 'dist/libs/skill-qrcode',
    tsConfig: 'libs/skill-qrcode/tsconfig.lib.json',
    compiler: 'swc',
    format: ['esm', "cjs"],
    assets: [
      {
        input: 'libs/skill-qrcode/',
        glob: 'package.json',
        output: '.'
      },
      {
        input: 'libs/skill-qrcode/src/',
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
