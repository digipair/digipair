const { withNx } = require('@nx/rollup/with-nx');

module.exports = withNx(
  {
    main: 'libs/skill-tool/src/index.ts',
    outputPath: 'dist/libs/skill-tool',
    tsConfig: 'libs/skill-tool/tsconfig.lib.json',
    compiler: 'swc',
    format: ['esm', "cjs"],
    assets: [
      {
        input: 'libs/skill-tool/',
        glob: 'package.json',
        output: '.'
      },
      {
        input: 'libs/skill-tool/src/',
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
