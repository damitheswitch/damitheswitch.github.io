import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';

// Swap to the .me domain once claimed (and add public/CNAME):
//   site: 'https://yourdomain.me'
export default defineConfig({
  site: 'https://damitheswitch.github.io',
  integrations: [sitemap()],
});
