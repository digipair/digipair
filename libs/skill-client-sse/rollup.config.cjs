const { withNx } = require('@nx/rollup/with-nx');

module.exports = withNx(
  {
    main: 'libs/skill-client-sse/src/index.ts',
    outputPath: 'dist/libs/skill-client-sse',
    tsConfig: 'libs/skill-client-sse/tsconfig.lib.json',
    compiler: 'swc',
    format: ['esm', "cjs"],
    assets: [
      {
        input: 'libs/skill-client-sse/',
        glob: 'package.json',
        output: '.'
      },
      {
        input: 'libs/skill-client-sse/src/',
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
