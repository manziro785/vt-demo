// Собирает dist/ в одну страницу для публикации: стили и скрипт встраиваются внутрь.
import { readFileSync, writeFileSync, readdirSync } from 'node:fs';
import { join } from 'node:path';

const dir = new URL('../dist/assets/', import.meta.url).pathname;
const files = readdirSync(dir);
const css = readFileSync(join(dir, files.find((f) => f.endsWith('.css'))), 'utf8');
const js = readFileSync(join(dir, files.find((f) => f.endsWith('.js'))), 'utf8').replace(/<\/script/gi, '<\\/script');

const page = `<title>Он-Арча</title>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Onest:wght@400;500;600&display=swap">
<meta name="claude:viewport-fit-sides" content="cover">
<style>${css}</style>
<div id="root"></div>
<script type="module">${js}</script>
`;
const out = new URL('../artifact.html', import.meta.url).pathname;
writeFileSync(out, page);
console.log('written', out, page.length, 'bytes');
