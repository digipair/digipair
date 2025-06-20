const { withNx } = require('@nx/rollup/with-nx');

module.exports = withNx(
  {
    main: 'libs/skill-imap/src/index.ts',
    outputPath: 'dist/libs/skill-imap',
    tsConfig: 'libs/skill-imap/tsconfig.lib.json',
    compiler: 'swc',
    format: ['esm', "cjs"],
    assets: [
      {
        input: 'libs/skill-imap/',
        glob: 'package.json',
        output: '.'
      },
      {
        input: 'libs/skill-imap/src/',
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
