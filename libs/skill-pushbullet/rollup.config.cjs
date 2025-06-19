const { withNx } = require('@nx/rollup/with-nx');

module.exports = withNx(
  {
    main: 'libs/skill-pushbullet/src/index.ts',
    outputPath: 'dist/libs/skill-pushbullet',
    tsConfig: 'libs/skill-pushbullet/tsconfig.lib.json',
    compiler: 'swc',
    format: ['esm', "cjs"],
    assets: [
      {
        input: 'libs/skill-pushbullet/',
        glob: 'package.json',
        output: '.'
      },
      {
        input: 'libs/skill-pushbullet/src/',
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
