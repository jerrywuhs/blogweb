import Link from "next/link";
import { notFound } from "next/navigation";
import { getTechPost, techPosts } from "@/data/tech";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return techPosts.map((post) => ({ slug: post.slug }));
}

export default async function TechDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getTechPost(slug);

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
          <Link href="/tech" className="text-sm text-white/70">
            ← 返回技术博客
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
              <h2 className="text-xl font-semibold">本章要点</h2>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-white/85">
                <li>梳理系统架构与数据流向，搭建复用性强的策略框架。</li>
                <li>定义指标输入输出，保证后续回测与实盘一致性。</li>
                <li>建立风控与日志体系，便于复盘与持续优化。</li>
              </ul>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <h2 className="text-xl font-semibold">核心框架示意</h2>
              <p className="mt-3 text-sm text-white/85">
                以“数据采集 → 指标计算 → 策略决策 → 执行回测/实盘”为主链路，
                确保每一层都有清晰的输入输出标准。
              </p>
              <pre className="mt-4 overflow-x-auto rounded-2xl bg-black/60 p-4 text-xs text-emerald-200">
{`def pipeline(data):
    indicators = calc_indicators(data)
    signal = strategy(indicators)
    order = risk_engine(signal)
    return order`}
              </pre>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <h2 className="text-xl font-semibold">相关推荐</h2>
              <div className="mt-4 space-y-3 text-sm text-white/70">
                {techPosts
                  .filter((item) => item.slug !== post.slug)
                  .map((item) => (
                    <Link key={item.slug} href={`/tech/${item.slug}`} className="block">
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
                <li>本章要点</li>
                <li>核心框架示意</li>
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
