import type { MetadataRoute } from "next";
import { techPosts } from "@/data/tech";
import { personalPosts } from "@/data/personal";
import { tools } from "@/data/tools";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://whsls.net";
  const staticRoutes = [
    "",
    "/tech",
    "/tech/series",
    "/personal",
    "/personal/series",
    "/tools",
    "/search",
    "/tags",
    "/categories",
    "/about",
    "/guestbook",
  ];

  const entries: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
    url: `${base}${route}`,
    lastModified: new Date(),
  }));

  techPosts.forEach((post) =>
    entries.push({
      url: `${base}/tech/${post.slug}`,
      lastModified: new Date(post.date),
    })
  );

  personalPosts.forEach((post) =>
    entries.push({
      url: `${base}/personal/${post.slug}`,
      lastModified: new Date(post.date),
    })
  );

  tools.forEach((tool) =>
    entries.push({
      url: `${base}/tools/${tool.id}`,
      lastModified: new Date(),
    })
  );

  return entries;
}
