const { withNx } = require('@nx/rollup/with-nx');

module.exports = withNx(
  {
    main: 'libs/skill-debug/src/index.ts',
    outputPath: 'dist/libs/skill-debug',
    tsConfig: 'libs/skill-debug/tsconfig.lib.json',
    compiler: 'swc',
    format: ['esm', "cjs"],
    assets: [
      {
        input: 'libs/skill-debug/',
        glob: 'package.json',
        output: '.'
      },
      {
        input: 'libs/skill-debug/src/',
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
