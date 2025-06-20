const { withNx } = require('@nx/rollup/with-nx');

module.exports = withNx(
  {
    main: 'libs/skill-editor/src/index.ts',
    outputPath: 'dist/libs/skill-editor',
    tsConfig: 'libs/skill-editor/tsconfig.lib.json',
    compiler: 'swc',
    format: ['esm', "cjs"],
    assets: [
      {
        input: 'libs/skill-editor/',
        glob: 'package.json',
        output: '.'
      },
      {
        input: 'libs/skill-editor/src/',
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
