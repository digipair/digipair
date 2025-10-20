#!/usr/bin/env node

import { execSync } from 'child_process';
import { exit } from 'process';

const version = process.argv[2] || process.env.NPMVERSION || '0.0.1-local';
// const registry = process.env.REGISTRY || 'http://localhost:4873/';
//
// const env = {
//   ...process.env,
//   NPM_CONFIG_REGISTRY: registry,
//   YARN_REGISTRY: registry,
// };

console.log(`📦 Publication de la version: ${version}`);
console.log('='.repeat(50));


// NOTE : pb npx nx release, impossible on local registry
// Procédure : add .npmrc on root with registry=http://localhost:4873/
// then execute 3 commands on bash

const commands = [
  `npx nx release -y ${version}`,
  `yarn run replace-in-file /latest/g ${version} apps/factory/dist/package.json`,
  `npm_config_registry=http://localhost:4873/ node tools/scripts/publish-factory.mjs factory ${version} latest`
];

try {
  for (const cmd of commands) {
    console.log(`\n🚀 Exécution: ${cmd}\n`);
    execSync(cmd, { stdio: 'inherit', env });
  }
  console.log('\n✅ Publication réussie !');
  exit(0);
} catch (error) {
  console.error('\n❌ Erreur lors de la publication');
  exit(error.status || 1);
}
