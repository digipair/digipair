const rollup = require('rollup');
const typescript = require('@rollup/plugin-typescript');
const { nodeResolve } = require('@rollup/plugin-node-resolve');
const commonjs = require('@rollup/plugin-commonjs');
const json = require('@rollup/plugin-json');

const packageJson = require('./package.json');

const external = [
  ...Object.keys(packageJson.dependencies || {}),
  ...Object.keys(packageJson.peerDependencies || {}),
  '@digipair/engine'
];

const inputOptions = {
  input: 'src/index.ts',
  external,
  plugins: [
    nodeResolve({ preferBuiltins: true }),
    commonjs(),
    typescript({
      tsconfig: './tsconfig.lib.json',
      declaration: false,
    }),
    json(),
  ],
};

const outputOptionsList = [
  {
    file: 'dist/index.cjs.js',
    format: 'cjs',
    exports: 'named',
  },
  {
    file: 'dist/index.esm.js',
    format: 'es',
    exports: 'named',
  },
];

async function build() {
  let bundle;
  let buildFailed = false;
  try {
    bundle = await rollup.rollup(inputOptions);
    await Promise.all(outputOptionsList.map(bundle.write));
  } catch (error) {
    buildFailed = true;
    console.error(error);
  }
  if (bundle) {
    await bundle.close();
  }
  process.exit(buildFailed ? 1 : 0);
}

build();