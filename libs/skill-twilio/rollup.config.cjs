const { withNx } = require('@nx/rollup/with-nx');

module.exports = withNx(
  {
    main: 'libs/skill-twilio/src/index.ts',
    outputPath: 'dist/libs/skill-twilio',
    tsConfig: 'libs/skill-twilio/tsconfig.lib.json',
    compiler: 'swc',
    format: ['esm', "cjs"],
    assets: [
      {
        input: 'libs/skill-twilio/',
        glob: 'package.json',
        output: '.'
      },
      {
        input: 'libs/skill-twilio/src/',
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
