const fs = require('fs');
const path = require('path');

module.exports = function cleanupPlugin(dirs = ['node_modules', '.cache']) {
  return {
    name: 'cleanup-after-build',
    closeBundle() {
      const baseDir = process.cwd();

      dirs.forEach(dirName => {
        const dir = path.resolve(baseDir, dirName);
        if (fs.existsSync(dir)) {
          try {
            fs.rmSync(dir, { recursive: true, force: true });
            console.log(`✅ Clean: ${path.relative(baseDir, dir)}`);
          } catch (err) {
            console.warn(`⚠️  Error during clean ${dir}:`, err.message);
          }
        }
      });
    }
  };
};
