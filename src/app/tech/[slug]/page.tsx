import fs from "node:fs/promises";
import path from "node:path";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import matter from "gray-matter";
import SiteHeader from "@/components/SiteHeader";
import { getTechPost, techPosts } from "@/data/tech";

const CONTENT_DIR = path.join(process.cwd(), "content", "tech");

async function getPostContent(slug: string) {
  const files = await fs.readdir(CONTENT_DIR);
  for (const file of files) {
    if (!file.endsWith(".mdx")) continue;
    const fullPath = path.join(CONTENT_DIR, file);
    const raw = await fs.readFile(fullPath, "utf8");
    const { content, data } = matter(raw);
    if (data?.slug === slug) {
      return { content, data };
    }
  }
  return null;
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const files = await fs.readdir(CONTENT_DIR);
  const slugsFromFiles: string[] = [];

  for (const file of files) {
    if (!file.endsWith(".mdx")) continue;
    const raw = await fs.readFile(path.join(CONTENT_DIR, file), "utf8");
    const { data } = matter(raw);
    if (data?.slug) slugsFromFiles.push(String(data.slug));
  }

  const unique = Array.from(new Set([...slugsFromFiles, ...techPosts.map((post) => post.slug)]));
  return unique.map((slug) => ({ slug }));
}

export default async function TechDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getTechPost(slug);
  const mdx = await getPostContent(slug);

  if (!post && !mdx) return notFound();

  const frontmatter = mdx?.data ?? {};
  const title = post?.title ?? (frontmatter.title as string) ?? slug;
  const category = post?.category ?? (frontmatter.category as string) ?? "技术博客";
  const date = post?.date ?? (frontmatter.date as string) ?? "";
  const type = post?.type ?? (frontmatter.type as string) ?? "article";
  const tags = post?.tags ?? (frontmatter.tags as string[]) ?? [];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    datePublished: date,
    dateModified: date,
    articleSection: category,
    keywords: tags.join(","),
  };

  const recommendedTools = [
    {
      name: "Notion",
      desc: "知识库与内容管理，适合文档沉淀与团队协作。",
      url: "https://www.notion.so/",
    },
    {
      name: "Figma",
      desc: "产品与内容视觉设计，快速出原型与图示。",
      url: "https://www.figma.com/",
    },
    {
      name: "Vercel",
      desc: "前端部署与预览环境，适合技术博客与工具站。",
      url: "https://vercel.com/",
    },
    {
      name: "Canva",
      desc: "轻量化封面与海报设计，适合内容配图。",
      url: "https://www.canva.com/",
    },
    {
      name: "Zapier",
      desc: "跨工具自动化，将内容生成流程串起来。",
      url: "https://zapier.com/",
    },
    {
      name: "Make (Integromat)",
      desc: "更复杂的流程编排与多步骤自动化。",
      url: "https://www.make.com/",
    },
  ];

  return (
    <div className="min-h-screen text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <SiteHeader active="/tech" />

      <main className="mx-auto w-full max-w-6xl px-6 pb-20 pt-12">
        <section className="rounded-[32px] border border-[color:var(--border-muted)] bg-[color:var(--surface-1)] p-8 md:p-10">
          <div className="flex flex-wrap items-center justify-between gap-4 text-sm text-subtle">
            <Link href="/tech" className="inline-flex items-center gap-2 text-muted">
              ← 返回技术博客
            </Link>
            <span className="rounded-full border border-[color:var(--border-muted)] bg-[color:var(--surface-2)] px-3 py-1 text-xs uppercase tracking-[0.3em]">
              {post?.seriesTitle || category}
            </span>
          </div>
          <p className="mt-6 text-sm uppercase tracking-[0.35em] text-subtle">
            {category}
          </p>
          <h1 className="mt-4 text-4xl font-semibold leading-tight md:text-5xl">
            {title}
          </h1>
          <p className="mt-4 text-base text-muted">
            {date} · {type}
          </p>
        </section>

        <section className="mt-10 grid gap-8 lg:grid-cols-[1fr_320px]">
          <article className="space-y-8 text-[17px] leading-relaxed text-muted">
            {mdx ? (
              <div className="rounded-3xl border border-[color:var(--border-muted)] bg-[color:var(--surface-1)] p-8 prose prose-invert max-w-none">
                <MDXRemote source={mdx.content} />
              </div>
            ) : (
              <div className="rounded-3xl border border-[color:var(--border-muted)] bg-[color:var(--surface-1)] p-8">
                <h2 className="text-2xl font-semibold text-white">本章要点</h2>
                <ul className="mt-4 list-disc space-y-3 pl-5">
                  <li>梳理系统架构与数据流向，搭建复用性强的策略框架。</li>
                  <li>定义指标输入输出，保证后续回测与实盘一致性。</li>
                  <li>建立风控与日志体系，便于复盘与持续优化。</li>
                </ul>
              </div>
            )}

            <div className="rounded-3xl border border-[color:var(--border-muted)] bg-[color:var(--surface-1)] p-8">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <h2 className="text-2xl font-semibold text-white">推荐工具</h2>
                <span className="text-xs uppercase tracking-[0.3em] text-subtle">
                  Affiliate Ready
                </span>
              </div>
              <p className="mt-3 text-sm text-subtle">
                这里可替换为你的联盟链接（目前为官方链接）。
              </p>
              <div className="mt-5 grid gap-3 md:grid-cols-2">
                {recommendedTools.map((tool) => (
                  <a
                    key={tool.name}
                    href={tool.url}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-2xl border border-[color:var(--border-muted)] bg-[color:var(--surface-2)] px-4 py-4 transition hover:border-[color:var(--border-strong)]"
                  >
                    <div className="text-base font-semibold text-white">{tool.name}</div>
                    <div className="mt-2 text-sm text-muted">{tool.desc}</div>
                  </a>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-[color:var(--border-muted)] bg-[color:var(--surface-1)] p-8">
              <h2 className="text-2xl font-semibold text-white">相关推荐</h2>
              <div className="mt-4 space-y-3 text-base text-muted">
                {techPosts
                  .filter((item) => item.slug !== post?.slug)
                  .map((item) => (
                    <Link
                      key={item.slug}
                      href={`/tech/${item.slug}`}
                      className="block rounded-2xl border border-[color:var(--border-muted)] bg-[color:var(--surface-2)] px-4 py-3 transition hover:border-[color:var(--border-strong)]"
                    >
                      {item.title}
                    </Link>
                  ))}
              </div>
            </div>
          </article>

          <aside className="space-y-4">
            <div className="rounded-3xl border border-[color:var(--border-muted)] bg-[color:var(--surface-1)] p-6">
              <h3 className="text-sm font-semibold text-muted">目录</h3>
              <ul className="mt-4 space-y-2 text-sm text-subtle">
                <li>正文内容</li>
                <li>推荐工具</li>
                <li>相关推荐</li>
              </ul>
            </div>
            <div className="rounded-3xl border border-[color:var(--border-muted)] bg-[color:var(--surface-1)] p-6">
              <p className="text-sm text-muted">广告位 C（详情页末尾 · 4:3）</p>
              <div className="mt-4 h-52 rounded-2xl border border-dashed border-[color:var(--border-muted)]" />
            </div>
          </aside>
        </section>
      </main>
    </div>
  );
}
