const { withNx } = require('@nx/rollup/with-nx');

module.exports = withNx(
  {
    main: 'libs/skill-web-ionic/src/index.ts',
    outputPath: 'dist/libs/skill-web-ionic',
    tsConfig: 'libs/skill-web-ionic/tsconfig.lib.json',
    compiler: 'swc',
    format: ['esm', "cjs"],
    assets: [
      {
        input: 'libs/skill-web-ionic/',
        glob: 'package.json',
        output: '.'
      },
      {
        input: 'libs/skill-web-ionic/src/',
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
