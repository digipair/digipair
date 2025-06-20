const { withNx } = require('@nx/rollup/with-nx');

module.exports = withNx(
  {
    main: 'libs/skill-yolo/src/index.ts',
    outputPath: 'dist/libs/skill-yolo',
    tsConfig: 'libs/skill-yolo/tsconfig.lib.json',
    compiler: 'swc',
    format: ['esm', "cjs"],
    assets: [
      {
        input: 'libs/skill-yolo/',
        glob: 'package.json',
        output: '.'
      },
      {
        input: 'libs/skill-yolo/src/',
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
