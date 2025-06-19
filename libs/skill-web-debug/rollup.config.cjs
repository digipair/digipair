const { withNx } = require('@nx/rollup/with-nx');

module.exports = withNx(
  {
    main: 'libs/skill-web-debug/src/index.ts',
    outputPath: 'dist/libs/skill-web-debug',
    tsConfig: 'libs/skill-web-debug/tsconfig.lib.json',
    compiler: 'swc',
    format: ['esm', "cjs"],
    assets: [
      {
        input: 'libs/skill-web-debug/',
        glob: 'package.json',
        output: '.'
      },
      {
        input: 'libs/skill-web-debug/src/',
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
