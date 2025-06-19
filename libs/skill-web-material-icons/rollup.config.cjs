const { withNx } = require('@nx/rollup/with-nx');

module.exports = withNx(
  {
    main: 'libs/skill-web-material-icons/src/index.ts',
    outputPath: 'dist/libs/skill-web-material-icons',
    tsConfig: 'libs/skill-web-material-icons/tsconfig.lib.json',
    compiler: 'swc',
    format: ['esm', "cjs"],
    assets: [
      {
        input: 'libs/skill-web-material-icons/',
        glob: 'package.json',
        output: '.'
      },
      {
        input: 'libs/skill-web-material-icons/src/',
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
