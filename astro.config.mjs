import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import UnoCSS from "unocss/astro";
import preact from "@astrojs/preact";

import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  output: "hybrid",
  experimental: {
    hybridOutput: true
  },
  site: "https://nullish.space",
  integrations: [mdx(), sitemap(), UnoCSS(), preact()],
  adapter: vercel()
});