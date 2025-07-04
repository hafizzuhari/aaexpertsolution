// @ts-check
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';

// import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
  site: 'https://www.aaexpertsolution.com',
  vite: {
    plugins: [tailwindcss()]
  }
  
  // ssr
  // output: "server",
  // adapter: node({
  //   mode: "standalone",
  // })
});
