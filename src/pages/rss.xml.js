import rss from "@astrojs/rss";
import { SITE_TITLE, SITE_DESCRIPTION } from "../consts";
import { ghostClient } from "../lib/ghost";

export async function get(context) {
  const posts = await ghostClient.posts.browse({
    limit: "all",
    include: "tags,authors",
  });

  return rss({
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    site: context.site,
    items: posts.map((post) => ({
      title: post.title,
      description: post.excerpt,
      pubDate: post.published_at,
      link: `/blog/${post.slug}/`,
    })),
  });
}
