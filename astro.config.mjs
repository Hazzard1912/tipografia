// @ts-check
import { defineConfig } from 'astro/config';
import icon from 'astro-icon';

import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.litografiaalbeiro.com',
  trailingSlash: 'always',
  integrations: [
    icon({
      include: {
        mdi: ["*"]
      }
    }),
    sitemap(),
  ],
  vite: {
    plugins: [tailwindcss()]
  },
  devToolbar: {
    enabled: false,
  },
  image: {
    domains: [],
    remotePatterns: [],
    service: {
      entrypoint: 'astro/assets/services/sharp'
    }
  }
});