import { execFileSync } from 'node:child_process';
import { cpSync, mkdtempSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('../', import.meta.url));
const temporary = mkdtempSync(join(tmpdir(), 'sumup-bruno-'));
const output = join(temporary, 'bruno');

try {
  execFileSync(process.execPath, [
    fileURLToPath(import.meta.resolve('@usebruno/cli/bin/bru.js')),
    'import', 'openapi',
    '--source', join(root, 'openapi.json'),
    '--output', output,
    '--collection-name', 'SumUp API',
    '--collection-format', 'bru',
    '--group-by', 'tags',
  ], { stdio: 'inherit' });

  // Replace the generated tree so removed operations do not leave stale requests.
  rmSync(join(root, 'bruno'), { recursive: true, force: true });
  cpSync(output, join(root, 'bruno'), { recursive: true });
} finally {
  rmSync(temporary, { recursive: true, force: true });
}
