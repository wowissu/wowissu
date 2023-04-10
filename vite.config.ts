import { defineConfig } from 'vite';
import { qwikVite } from '@builder.io/qwik/optimizer';
import { qwikCity } from '@builder.io/qwik-city/vite';
import tsconfigPaths from 'vite-tsconfig-paths';
import path from 'path';

// const rootDir = path.join(__dirname, 'src');
export const outDir = path.join(__dirname, 'docs');

export default defineConfig(() => {
  return {
    base: "/wowissu/",
    plugins: [qwikCity(), qwikVite({ client: { outDir } }), tsconfigPaths()],
    preview: {
      headers: {
        'Cache-Control': 'public, max-age=600',
      },
    },
  };
});
