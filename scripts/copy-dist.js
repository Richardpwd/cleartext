const fs = require('fs/promises');
const path = require('path');

async function copyDir(src, dest) {
  await fs.rm(dest, { recursive: true, force: true });
  await fs.mkdir(dest, { recursive: true });
  await fs.cp(src, dest, { recursive: true });
}

async function main() {
  const src = path.join(__dirname, '..', 'frontend', 'dist');
  const dest = path.join(__dirname, '..', 'dist');

  await copyDir(src, dest);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});