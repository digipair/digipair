const { withNx } = require('@nx/rollup/with-nx');

module.exports = withNx(
  {
    main: 'libs/skill-web-push-notification/src/index.ts',
    outputPath: 'dist/libs/skill-web-push-notification',
    tsConfig: 'libs/skill-web-push-notification/tsconfig.lib.json',
    compiler: 'swc',
    format: ['esm', "cjs"],
    assets: [
      {
        input: 'libs/skill-web-push-notification/',
        glob: 'package.json',
        output: '.'
      },
      {
        input: 'libs/skill-web-push-notification/src/',
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
