import Link from "next/link";
import { notFound } from "next/navigation";
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
    <div className="min-h-screen bg-slate-950 text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <header className="border-b border-white/10 bg-slate-950/80 backdrop-blur">
        <div className="mx-auto flex w-full max-w-5xl items-center justify-between px-6 py-5">
          <Link href="/personal" className="text-sm text-white/70">
            ← 返回个人博客
          </Link>
          <div className="text-xs uppercase tracking-[0.3em] text-white/40">
            {post.seriesTitle}
          </div>
        </div>
      </header>

      <main className="mx-auto w-full max-w-5xl px-6 py-12">
        <section className="space-y-4">
          <p className="text-xs uppercase tracking-[0.3em] text-white/70">
            {post.category}
          </p>
          <h1 className="text-3xl font-semibold">{post.title}</h1>
          <p className="text-sm text-white/80">{post.date} · {post.type}</p>
        </section>

        <section className="mt-10 grid gap-8 lg:grid-cols-[1fr_280px]">
          <article className="space-y-8">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <h2 className="text-xl font-semibold">本文摘要</h2>
              <p className="mt-3 text-sm text-white/85">
                通过回顾关键节点，将高频问题整理成可复用的行动清单，帮助在下一轮复盘时快速定位瓶颈。
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <h2 className="text-xl font-semibold">关键观察</h2>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-white/85">
                <li>将复杂目标拆成节奏化的周期与检查点。</li>
                <li>记录决策理由，形成可追溯的判断依据。</li>
                <li>预留缓冲空间，为高强度输出建立恢复机制。</li>
              </ul>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <h2 className="text-xl font-semibold">相关推荐</h2>
              <div className="mt-4 space-y-3 text-sm text-white/70">
                {personalPosts
                  .filter((item) => item.slug !== post.slug)
                  .map((item) => (
                    <Link key={item.slug} href={`/personal/${item.slug}`} className="block">
                      {item.title}
                    </Link>
                  ))}
              </div>
            </div>
          </article>

          <aside className="space-y-4">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
              <h3 className="text-sm font-semibold text-white/70">目录</h3>
              <ul className="mt-3 space-y-2 text-sm text-white/60">
                <li>本文摘要</li>
                <li>关键观察</li>
                <li>相关推荐</li>
              </ul>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
              <p className="text-sm text-white/70">广告位 C（详情页末尾 · 4:3）</p>
              <div className="mt-3 h-48 rounded-2xl border border-dashed border-white/20" />
            </div>
          </aside>
        </section>
      </main>
    </div>
  );
}
