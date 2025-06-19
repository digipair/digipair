const { withNx } = require('@nx/rollup/with-nx');

module.exports = withNx(
  {
    main: 'libs/skill-dsp/src/index.ts',
    outputPath: 'dist/libs/skill-dsp',
    tsConfig: 'libs/skill-dsp/tsconfig.lib.json',
    compiler: 'swc',
    format: ['esm', "cjs"],
    assets: [
      {
        input: 'libs/skill-dsp/',
        glob: 'package.json',
        output: '.'
      },
      {
        input: 'libs/skill-dsp/src/',
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
