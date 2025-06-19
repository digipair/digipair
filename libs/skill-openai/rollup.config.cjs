const { withNx } = require('@nx/rollup/with-nx');

module.exports = withNx(
  {
    main: 'libs/skill-openai/src/index.ts',
    outputPath: 'dist/libs/skill-openai',
    tsConfig: 'libs/skill-openai/tsconfig.lib.json',
    compiler: 'swc',
    format: ['esm', "cjs"],
    assets: [
      {
        input: 'libs/skill-openai/',
        glob: 'package.json',
        output: '.'
      },
      {
        input: 'libs/skill-openai/src/',
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
