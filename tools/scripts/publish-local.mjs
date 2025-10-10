#!/usr/bin/env node

import { execSync } from 'child_process';
import { exit } from 'process';

const version = process.argv[2] || process.env.NPMVERSION || '0.0.1-local';

console.log(`📦 Publication de la version: ${version}`);
console.log('='.repeat(50));

const commands = [
  `npx nx release -y ${version} --registry=http://localhost:4873/`,
  `yarn run replace-in-file /latest/g ${version} dist/apps/factory/package.json`,
  `npm_config_registry=http://localhost:4873/ node tools/scripts/publish-factory.mjs factory ${version} latest`
];

try {
  for (const cmd of commands) {
    console.log(`\n🚀 Exécution: ${cmd}\n`);
    execSync(cmd, { stdio: 'inherit' });
  }

  console.log('\n✅ Publication réussie !');
  exit(0);
} catch (error) {
  console.error('\n❌ Erreur lors de la publication');
  exit(error.status || 1);
}
