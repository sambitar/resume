// @ts-check
import { defineConfig } from 'astro/config';

import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
  redirects: {
    '/portfolio-test': '/portfolio',
    '/portfolio-test/meridian-pm': '/portfolio/meridian-pm',
    '/portfolio-test/gate-smart-access': '/portfolio/gate-smart-access',
    '/portfolio-test/pharma-warehouse-env': '/portfolio/pharma-warehouse-env',
  },

  adapter: cloudflare(),
});