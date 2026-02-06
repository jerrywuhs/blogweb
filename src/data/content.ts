import { techPosts } from "@/data/tech";
import { personalPosts } from "@/data/personal";
import { tools } from "@/data/tools";

export type ContentType = "tech" | "personal" | "tool";

export interface ContentItem {
  id: string;
  title: string;
  summary: string;
  category: string;
  tags: string[];
  type: ContentType;
  href: string;
}

export const contentIndex: ContentItem[] = [
  ...techPosts.map((post) => ({
    id: post.slug,
    title: post.title,
    summary: post.summary,
    category: post.category,
    tags: post.tags,
    type: "tech" as const,
    href: `/tech/${post.slug}`,
  })),
  ...personalPosts.map((post) => ({
    id: post.slug,
    title: post.title,
    summary: post.summary,
    category: post.category,
    tags: post.tags,
    type: "personal" as const,
    href: `/personal/${post.slug}`,
  })),
  ...tools.map((tool) => ({
    id: tool.id,
    title: tool.name,
    summary: tool.summary,
    category: tool.category,
    tags: tool.tags,
    type: "tool" as const,
    href: `/tools/${tool.id}`,
  })),
];

export const allTags = Array.from(
  new Set(contentIndex.flatMap((item) => item.tags))
).sort();

export const allCategories = Array.from(
  new Set(contentIndex.map((item) => item.category))
).sort();
