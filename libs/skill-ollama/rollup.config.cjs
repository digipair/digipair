const { withNx } = require('@nx/rollup/with-nx');

module.exports = withNx(
  {
    main: 'libs/skill-ollama/src/index.ts',
    outputPath: 'dist/libs/skill-ollama',
    tsConfig: 'libs/skill-ollama/tsconfig.lib.json',
    compiler: 'swc',
    format: ['esm', "cjs"],
    assets: [
      {
        input: 'libs/skill-ollama/',
        glob: 'package.json',
        output: '.'
      },
      {
        input: 'libs/skill-ollama/src/',
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
