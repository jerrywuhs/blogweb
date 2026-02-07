import Link from "next/link";
import { notFound } from "next/navigation";
import SiteHeader from "@/components/SiteHeader";
import { getPersonalPost, personalPosts } from "@/data/personal";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return personalPosts.map((post) => ({ slug: post.slug }));
}

export default async function PersonalDetail({ params }: PageProps) {
  const { slug } = await params;
  const post = getPersonalPost(slug);
  if (!post) return notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    datePublished: post.date,
    dateModified: post.date,
    articleSection: post.category,
    keywords: post.tags.join(","),
  };

  return (
    <div className="min-h-screen text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <SiteHeader active="/personal" />

      <main className="mx-auto w-full max-w-6xl px-6 pb-20 pt-12">
        <section className="rounded-[32px] border border-[color:var(--border-muted)] bg-[color:var(--surface-1)] p-8 md:p-10">
          <div className="flex flex-wrap items-center justify-between gap-4 text-sm text-white/60">
            <Link href="/personal" className="inline-flex items-center gap-2 text-white/70">
              ← 返回个人博客
            </Link>
            <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.3em]">
              {post.seriesTitle}
            </span>
          </div>
          <p className="mt-6 text-sm uppercase tracking-[0.35em] text-white/60">
            {post.category}
          </p>
          <h1 className="mt-4 text-4xl font-semibold leading-tight md:text-5xl">
            {post.title}
          </h1>
          <p className="mt-4 text-base text-white/80">
            {post.date} · {post.type}
          </p>
        </section>

        <section className="mt-10 grid gap-8 lg:grid-cols-[1fr_320px]">
          <article className="space-y-8 text-[17px] leading-relaxed text-white/85">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
              <h2 className="text-2xl font-semibold">本文摘要</h2>
              <p className="mt-4">
                通过回顾关键节点，将高频问题整理成可复用的行动清单，帮助在下一轮复盘时快速定位瓶颈。
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
              <h2 className="text-2xl font-semibold">关键观察</h2>
              <ul className="mt-4 list-disc space-y-3 pl-5">
                <li>将复杂目标拆成节奏化的周期与检查点。</li>
                <li>记录决策理由，形成可追溯的判断依据。</li>
                <li>预留缓冲空间，为高强度输出建立恢复机制。</li>
              </ul>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
              <h2 className="text-2xl font-semibold">相关推荐</h2>
              <div className="mt-4 space-y-3 text-base text-white/70">
                {personalPosts
                  .filter((item) => item.slug !== post.slug)
                  .map((item) => (
                    <Link
                      key={item.slug}
                      href={`/personal/${item.slug}`}
                      className="block rounded-2xl border border-white/10 bg-white/5 px-4 py-3 transition hover:border-white/30"
                    >
                      {item.title}
                    </Link>
                  ))}
              </div>
            </div>
          </article>

          <aside className="space-y-4">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-sm font-semibold text-white/70">目录</h3>
              <ul className="mt-4 space-y-2 text-sm text-white/60">
                <li>本文摘要</li>
                <li>关键观察</li>
                <li>相关推荐</li>
              </ul>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <p className="text-sm text-white/70">广告位 C（详情页末尾 · 4:3）</p>
              <div className="mt-4 h-52 rounded-2xl border border-dashed border-white/20" />
            </div>
          </aside>
        </section>
      </main>
    </div>
  );
}
