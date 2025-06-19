const { withNx } = require('@nx/rollup/with-nx');

module.exports = withNx(
  {
    main: 'libs/skill-cron/src/index.ts',
    outputPath: 'dist/libs/skill-cron',
    tsConfig: 'libs/skill-cron/tsconfig.lib.json',
    compiler: 'swc',
    format: ['esm', "cjs"],
    assets: [
      {
        input: 'libs/skill-cron/',
        glob: 'package.json',
        output: '.'
      },
      {
        input: 'libs/skill-cron/src/',
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
