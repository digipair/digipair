const { withNx } = require('@nx/rollup/with-nx');

module.exports = withNx(
  {
    main: 'libs/skill-push-notification/src/index.ts',
    outputPath: 'dist/libs/skill-push-notification',
    tsConfig: 'libs/skill-push-notification/tsconfig.lib.json',
    compiler: 'swc',
    format: ['esm', "cjs"],
    assets: [
      {
        input: 'libs/skill-push-notification/',
        glob: 'package.json',
        output: '.'
      },
      {
        input: 'libs/skill-push-notification/src/',
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
