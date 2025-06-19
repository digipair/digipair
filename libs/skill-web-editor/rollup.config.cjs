const { withNx } = require('@nx/rollup/with-nx');

module.exports = withNx(
  {
    main: 'libs/skill-web-editor/src/index.ts',
    outputPath: 'dist/libs/skill-web-editor',
    tsConfig: 'libs/skill-web-editor/tsconfig.lib.json',
    compiler: 'swc',
    format: ['esm', "cjs"],
    assets: [
      {
        input: 'libs/skill-web-editor/',
        glob: 'package.json',
        output: '.'
      },
      {
        input: 'libs/skill-web-editor/src/',
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
