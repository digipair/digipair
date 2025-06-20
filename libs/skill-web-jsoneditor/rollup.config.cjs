const { withNx } = require('@nx/rollup/with-nx');

module.exports = withNx(
  {
    main: 'libs/skill-web-jsoneditor/src/index.ts',
    outputPath: 'dist/libs/skill-web-jsoneditor',
    tsConfig: 'libs/skill-web-jsoneditor/tsconfig.lib.json',
    compiler: 'swc',
    format: ['esm', "cjs"],
    assets: [
      {
        input: 'libs/skill-web-jsoneditor/',
        glob: 'package.json',
        output: '.'
      },
      {
        input: 'libs/skill-web-jsoneditor/src/',
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
