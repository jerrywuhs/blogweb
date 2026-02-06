import Link from "next/link";
import { personalPosts, personalSeries } from "@/data/personal";

export const metadata = {
  title: "个人博客 · 老吴的工作站",
};

export default function PersonalPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <header className="border-b border-white/10 bg-slate-950/80 backdrop-blur">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-5">
          <Link href="/" className="text-lg font-semibold">
            老吴的工作站
          </Link>
          <nav className="flex items-center gap-6 text-sm text-white/70">
            <Link href="/personal" className="text-white">
              个人博客
            </Link>
            <Link href="/personal/series">系列聚合</Link>
            <Link href="/tech">技术博客</Link>
          </nav>
        </div>
      </header>

      <main className="mx-auto w-full max-w-6xl px-6 py-12">
        <section className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-white/60">个人博客</p>
            <h1 className="mt-4 text-3xl font-semibold">
              工作复盘 · 生活记录 · 个人思考
            </h1>
            <p className="mt-3 text-sm text-white/85">
              用结构化方式记录思考与成长，保持长期主义与清晰表达。
            </p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-sm font-semibold text-white/70">系列专题</h2>
            <div className="mt-4 space-y-3">
              {personalSeries.map((series) => (
                <Link
                  key={series.id}
                  href={`/personal/series/${series.id}`}
                  className="block rounded-2xl border border-white/10 bg-white/5 p-4"
                >
                  <p className="text-sm font-semibold">{series.title}</p>
                  <p className="mt-2 text-xs text-white/75">{series.summary}</p>
                  <p className="mt-2 text-xs text-white/70">
                    {series.total} 集 · 更新 {series.updatedAt}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="mt-10 grid gap-6 lg:grid-cols-3">
          {personalPosts.map((post) => (
            <article
              key={post.slug}
              className="rounded-3xl border border-white/10 bg-white/5 p-6"
            >
              <p className="text-xs uppercase tracking-[0.3em] text-white/70">
                {post.category}
              </p>
              <h3 className="mt-3 text-lg font-semibold">{post.title}</h3>
              <p className="mt-3 text-sm text-white/85">{post.summary}</p>
              <div className="mt-4 flex flex-wrap gap-2 text-xs text-white/50">
                {post.tags.map((tag) => (
                  <span key={tag} className="rounded-full bg-white/10 px-2 py-1">
                    #{tag}
                  </span>
                ))}
              </div>
              <Link
                href={`/personal/${post.slug}`}
                className="mt-6 inline-flex text-sm font-semibold text-emerald-300"
              >
                阅读详情 →
              </Link>
            </article>
          ))}
        </section>
      </main>
    </div>
  );
}
