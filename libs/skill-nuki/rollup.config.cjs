const { withNx } = require('@nx/rollup/with-nx');

module.exports = withNx(
  {
    main: 'libs/skill-nuki/src/index.ts',
    outputPath: 'dist/libs/skill-nuki',
    tsConfig: 'libs/skill-nuki/tsconfig.lib.json',
    compiler: 'swc',
    format: ['esm', "cjs"],
    assets: [
      {
        input: 'libs/skill-nuki/',
        glob: 'package.json',
        output: '.'
      },
      {
        input: 'libs/skill-nuki/src/',
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
