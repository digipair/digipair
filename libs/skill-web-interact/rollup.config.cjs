const { withNx } = require('@nx/rollup/with-nx');

module.exports = withNx(
  {
    main: 'libs/skill-web-interact/src/index.ts',
    outputPath: 'dist/libs/skill-web-interact',
    tsConfig: 'libs/skill-web-interact/tsconfig.lib.json',
    compiler: 'swc',
    format: ['esm', "cjs"],
    assets: [
      {
        input: 'libs/skill-web-interact/',
        glob: 'package.json',
        output: '.'
      },
      {
        input: 'libs/skill-web-interact/src/',
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
