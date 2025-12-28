import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],

  // ============================================================
  // PLACEHOLDER: Update this when you deploy to GitHub Pages
  // Replace 'your-github-username' with your actual GitHub username
  // Replace 'your-repo-name' with your repository name
  // ============================================================
  site: 'https://yunseo20080206-stack.github.io',
  base: '/website',

  output: 'static',
});
