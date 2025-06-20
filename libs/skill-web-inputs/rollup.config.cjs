const { withNx } = require('@nx/rollup/with-nx');

module.exports = withNx(
  {
    main: 'libs/skill-web-inputs/src/index.ts',
    outputPath: 'dist/libs/skill-web-inputs',
    tsConfig: 'libs/skill-web-inputs/tsconfig.lib.json',
    compiler: 'swc',
    format: ['esm', "cjs"],
    assets: [
      {
        input: 'libs/skill-web-inputs/',
        glob: 'package.json',
        output: '.'
      },
      {
        input: 'libs/skill-web-inputs/src/',
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
