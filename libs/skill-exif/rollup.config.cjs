const { withNx } = require('@nx/rollup/with-nx');

module.exports = withNx(
  {
    main: 'libs/skill-exif/src/index.ts',
    outputPath: 'dist/libs/skill-exif',
    tsConfig: 'libs/skill-exif/tsconfig.lib.json',
    compiler: 'swc',
    format: ['esm', "cjs"],
    assets: [
      {
        input: 'libs/skill-exif/',
        glob: 'package.json',
        output: '.'
      },
      {
        input: 'libs/skill-exif/src/',
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
