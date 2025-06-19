const { withNx } = require('@nx/rollup/with-nx');

module.exports = withNx(
  {
    main: 'libs/skill-webcam/src/index.ts',
    outputPath: 'dist/libs/skill-webcam',
    tsConfig: 'libs/skill-webcam/tsconfig.lib.json',
    compiler: 'swc',
    format: ['esm', "cjs"],
    assets: [
      {
        input: 'libs/skill-webcam/',
        glob: 'package.json',
        output: '.'
      },
      {
        input: 'libs/skill-webcam/src/',
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
