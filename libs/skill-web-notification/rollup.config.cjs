const { withNx } = require('@nx/rollup/with-nx');

module.exports = withNx(
  {
    main: 'libs/skill-web-notification/src/index.ts',
    outputPath: 'dist/libs/skill-web-notification',
    tsConfig: 'libs/skill-web-notification/tsconfig.lib.json',
    compiler: 'swc',
    format: ['esm', "cjs"],
    assets: [
      {
        input: 'libs/skill-web-notification/',
        glob: 'package.json',
        output: '.'
      },
      {
        input: 'libs/skill-web-notification/src/',
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
