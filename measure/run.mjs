import { build } from 'vite';
import react from '@vitejs/plugin-react';
import { readdirSync, readFileSync } from 'node:fs';
import { gzipSync } from 'node:zlib';
const size = async (entry, out) => {
  await build({ logLevel: 'silent', configFile: false, plugins: [react()], build: { outDir: out, emptyOutDir: true, rollupOptions: { input: entry }, write: true } });
  const f = readdirSync(out + '/assets').find((x) => x.endsWith('.js'));
  return gzipSync(readFileSync(out + '/assets/' + f)).length;
};
const a = await size('measure/a.jsx', 'measure/out-a');
const b = await size('measure/b.jsx', 'measure/out-b');
console.log(JSON.stringify({ reactOnly: a, withMotion: b, deltaKB: ((b - a) / 1024).toFixed(1) }));
