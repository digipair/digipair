const { withNx } = require('@nx/rollup/with-nx');

module.exports = withNx(
  {
    main: 'libs/skill-markitdown/src/index.ts',
    outputPath: 'dist/libs/skill-markitdown',
    tsConfig: 'libs/skill-markitdown/tsconfig.lib.json',
    compiler: 'swc',
    format: ['esm', "cjs"],
    assets: [
      {
        input: 'libs/skill-markitdown/',
        glob: 'package.json',
        output: '.'
      },
      {
        input: 'libs/skill-markitdown/src/',
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
