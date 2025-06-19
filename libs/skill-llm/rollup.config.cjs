const { withNx } = require('@nx/rollup/with-nx');

module.exports = withNx(
  {
    main: 'libs/skill-llm/src/index.ts',
    outputPath: 'dist/libs/skill-llm',
    tsConfig: 'libs/skill-llm/tsconfig.lib.json',
    compiler: 'swc',
    format: ['esm', "cjs"],
    assets: [
      {
        input: 'libs/skill-llm/',
        glob: 'package.json',
        output: '.'
      },
      {
        input: 'libs/skill-llm/src/',
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
