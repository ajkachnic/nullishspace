import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import UnoCSS from "unocss/astro";
import preact from "@astrojs/preact";
import solid from '@astrojs/solid-js';

import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  output: "hybrid",
  site: "https://nullish.space",
  integrations: [mdx(), sitemap(), UnoCSS(), preact(), solid()],
  adapter: vercel({
    analytics: true,
  }),
});
