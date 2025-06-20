const { withNx } = require('@nx/rollup/with-nx');

module.exports = withNx(
  {
    main: 'libs/skill-vespa/src/index.ts',
    outputPath: 'dist/libs/skill-vespa',
    tsConfig: 'libs/skill-vespa/tsconfig.lib.json',
    compiler: 'swc',
    format: ['esm', "cjs"],
    assets: [
      {
        input: 'libs/skill-vespa/',
        glob: 'package.json',
        output: '.'
      },
      {
        input: 'libs/skill-vespa/src/',
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
