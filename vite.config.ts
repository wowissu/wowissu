import { defineConfig } from 'vite';
import { qwikVite } from '@builder.io/qwik/optimizer';
import { qwikCity } from '@builder.io/qwik-city/vite';
import tsconfigPaths from 'vite-tsconfig-paths';
import path from 'path';

const outDir = path.join(__dirname, 'docs');

export default defineConfig(() => {
  return {
    base: "/wowissu/",
    build: {
      outDir
    },
    plugins: [qwikCity(), qwikVite({ client: { outDir } }), tsconfigPaths()],
    preview: {
      headers: {
        'Cache-Control': 'public, max-age=600',
      },
    },
  };
});
