const { withNx } = require('@nx/rollup/with-nx');
const { join } = require('path');
const { withNxDigipair } = require('../../tools/rollup/with-nx');
const { withNxDigipairNext } = require('../../tools/rollup/with-nx');

module.exports = withNxDigipair(['esm', 'cjs'], config =>
  withNx(
    {
      main: './src/index.ts',
      outputPath: './dist',
      tsConfig: './tsconfig.lib.json',
      compiler: 'swc',
      format: [config.format],
      external: config.format === 'cjs' ? ["feelin","cel-js","handlebars/dist/handlebars.min.js"] : [],
      assets: [
        {
          input: join(__dirname, 'src'),
          glob: '*.json',
          output: '.',
        },
      ],
    },
    {},
  ),
);

// module.exports = withNxDigipairNext(['esm', 'cjs'], (config) =>
//   withNx(
//     {
//       main: './src/index.ts',
//       outputPath: './dist',
//       tsConfig: './tsconfig.lib.json',
//       compiler: 'swc',
//       format: [config.format],
//       external: config.format === 'cjs'
//         ? ["feelin", "cel-js", "handlebars/dist/handlebars.min.js"]
//         : [],
//       assets: [
//         {
//           input: join(__dirname, 'src'),
//           glob: '*.json',
//           output: '.',
//         },
//       ],
//     },
//     {
//       bundleList: config.format === 'esm'
//         ? ["feelin", "cel-js", "handlebars/dist/handlebars.min.js"]
//         : [],
//       externalizeList: config.format === 'cjs'
//         ? ["feelin", "cel-js", "handlebars/dist/handlebars.min.js"]
//         : []
//     }
//   )
// );
