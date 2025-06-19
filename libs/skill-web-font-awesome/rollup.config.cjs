const { withNx } = require('@nx/rollup/with-nx');

module.exports = withNx(
  {
    main: 'libs/skill-web-font-awesome/src/index.ts',
    outputPath: 'dist/libs/skill-web-font-awesome',
    tsConfig: 'libs/skill-web-font-awesome/tsconfig.lib.json',
    compiler: 'swc',
    format: ['esm', "cjs"],
    assets: [
      {
        input: 'libs/skill-web-font-awesome/',
        glob: 'package.json',
        output: '.'
      },
      {
        input: 'libs/skill-web-font-awesome/src/',
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
