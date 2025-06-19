const { withNx } = require('@nx/rollup/with-nx');

module.exports = withNx(
  {
    main: 'libs/skill-worker/src/index.ts',
    outputPath: 'dist/libs/skill-worker',
    tsConfig: 'libs/skill-worker/tsconfig.lib.json',
    compiler: 'swc',
    format: ['esm', "cjs"],
    assets: [
      {
        input: 'libs/skill-worker/',
        glob: 'package.json',
        output: '.'
      },
      {
        input: 'libs/skill-worker/src/',
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
