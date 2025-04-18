import { defineConfig } from 'astro/config';

import svelte from "@astrojs/svelte";

// https://astro.build/config
export default defineConfig({
  site: 'https://programacion-es.dev/',
  base: "./",
  server: {
    port: 4321
  },
  integrations: [svelte()]
});