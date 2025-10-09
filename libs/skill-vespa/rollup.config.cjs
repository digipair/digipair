const { withNx } = require('@nx/rollup/with-nx');

module.exports = withNx(
  {
    main: './src/index.ts',
    outputPath: './dist',
    tsConfig: './tsconfig.lib.json',
    compiler: 'swc',
    format: ['esm', "cjs"],
    external: [/@digipair\//],
    assets: [
      {
        input: 'libs/skill-vespa/src/',
        glob: '*.json',
        output: '.'
      },
      {
        input: "libs/skill-vespa/",
        glob: "package.json",
        output: "."
      }
    ]
  },
  {
    // Provide additional rollup configuration here. See: https://rollupjs.org/configuration-options
    // e.g.
    // output: { sourcemap: true },
  }
);
