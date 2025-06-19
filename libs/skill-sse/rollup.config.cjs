const { withNx } = require('@nx/rollup/with-nx');

module.exports = withNx(
  {
    main: 'libs/skill-sse/src/index.ts',
    outputPath: 'dist/libs/skill-sse',
    tsConfig: 'libs/skill-sse/tsconfig.lib.json',
    compiler: 'swc',
    format: ['esm', "cjs"],
    assets: [
      {
        input: 'libs/skill-sse/',
        glob: 'package.json',
        output: '.'
      },
      {
        input: 'libs/skill-sse/src/',
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
