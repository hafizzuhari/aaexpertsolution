// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
// import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
  site: 'https://hafizzuhari.github.io',
  base: 'aaexpertsolution',
  vite: {
    plugins: [tailwindcss()]
  }
  // output: "server",
  // adapter: node({
  //   mode: "standalone",
  // })
});