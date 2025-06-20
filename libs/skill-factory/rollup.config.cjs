const { withNx } = require('@nx/rollup/with-nx');

module.exports = withNx(
  {
    main: 'libs/skill-factory/src/index.ts',
    outputPath: 'dist/libs/skill-factory',
    tsConfig: 'libs/skill-factory/tsconfig.lib.json',
    compiler: 'swc',
    format: ['esm', "cjs"],
    assets: [
      {
        input: 'libs/skill-factory/',
        glob: 'package.json',
        output: '.'
      },
      {
        input: 'libs/skill-factory/src/',
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
