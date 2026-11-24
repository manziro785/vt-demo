import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// ARTIFACT=1 встраивает картинки прямо в сборку (для публикации одной страницей).
export default defineConfig({
  plugins: [react()],
  base: './',
  // @/ — корень src: импорты между слоями FSD без ../../../
  resolve: { alias: { '@': fileURLToPath(new URL('./src', import.meta.url)) } },
  build: { assetsInlineLimit: process.env.ARTIFACT ? 10_000_000 : 4096 },
});
