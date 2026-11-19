import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://orionethanfg1.github.io',
  base: '/silver-moon',
  integrations: [tailwind()],
  compressHTML: true,
});
