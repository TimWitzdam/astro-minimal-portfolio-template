import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import icons from 'astro-icon';
import github from '@astrojs/github';
import remarkReadingTime from 'remark-reading-time';

export default defineConfig({
  integrations: [tailwind(), icons()],
  site: 'https://MrJoy05.github.io',
  base: '/Portfolio/', 
  output: 'static',
  adapter: github({
    pages: 'gh-pages',
  }),
  markdown: {
    remarkPlugins: [remarkReadingTime],
  },
});

