const { withNx } = require('@nx/rollup/with-nx');

module.exports = withNx(
  {
    main: 'libs/skill-web-voice-activity-detection/src/index.ts',
    outputPath: 'dist/libs/skill-web-voice-activity-detection',
    tsConfig: 'libs/skill-web-voice-activity-detection/tsconfig.lib.json',
    compiler: 'swc',
    format: ['esm', "cjs"],
    assets: [
      {
        input: 'libs/skill-web-voice-activity-detection/',
        glob: 'package.json',
        output: '.'
      },
      {
        input: 'libs/skill-web-voice-activity-detection/src/',
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
