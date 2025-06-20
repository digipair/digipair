const { withNx } = require('@nx/rollup/with-nx');

module.exports = withNx(
  {
    main: 'libs/skill-web-heygen/src/index.ts',
    outputPath: 'dist/libs/skill-web-heygen',
    tsConfig: 'libs/skill-web-heygen/tsconfig.lib.json',
    compiler: 'swc',
    format: ['esm', "cjs"],
    assets: [
      {
        input: 'libs/skill-web-heygen/',
        glob: 'package.json',
        output: '.'
      },
      {
        input: 'libs/skill-web-heygen/src/',
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
