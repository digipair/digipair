const { withNx } = require('@nx/rollup/with-nx');

module.exports = withNx(
  {
    main: 'libs/skill-sendmail/src/index.ts',
    outputPath: 'dist/libs/skill-sendmail',
    tsConfig: 'libs/skill-sendmail/tsconfig.lib.json',
    compiler: 'swc',
    format: ['esm', "cjs"],
    assets: [
      {
        input: 'libs/skill-sendmail/',
        glob: 'package.json',
        output: '.'
      },
      {
        input: 'libs/skill-sendmail/src/',
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
