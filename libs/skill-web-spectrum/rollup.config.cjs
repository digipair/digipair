const { withNx } = require('@nx/rollup/with-nx');

module.exports = withNx(
  {
    main: 'libs/skill-web-spectrum/src/index.ts',
    outputPath: 'dist/libs/skill-web-spectrum',
    tsConfig: 'libs/skill-web-spectrum/tsconfig.lib.json',
    compiler: 'swc',
    format: ['esm', "cjs"],
    assets: [
      {
        input: 'libs/skill-web-spectrum/',
        glob: 'package.json',
        output: '.'
      },
      {
        input: 'libs/skill-web-spectrum/src/',
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
