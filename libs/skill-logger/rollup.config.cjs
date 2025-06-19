const { withNx } = require('@nx/rollup/with-nx');

module.exports = withNx(
  {
    main: 'libs/skill-logger/src/index.ts',
    outputPath: 'dist/libs/skill-logger',
    tsConfig: 'libs/skill-logger/tsconfig.lib.json',
    compiler: 'swc',
    format: ['esm', "cjs"],
    assets: [
      {
        input: 'libs/skill-logger/',
        glob: 'package.json',
        output: '.'
      },
      {
        input: 'libs/skill-logger/src/',
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
