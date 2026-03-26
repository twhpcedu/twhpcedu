import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://twhpcedu.org',
  integrations: [
    tailwind(),
    sitemap()
  ],
  vite: {
    server: {
      allowedHosts: ['.ngrok-free.dev']
    }
  },
  markdown: {
    shikiConfig: {
      theme: 'github-dark',
      wrap: true
    }
  }
});
