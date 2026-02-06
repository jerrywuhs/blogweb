import Link from "next/link";
import { contentIndex } from "@/data/content";

interface PageProps {
  searchParams: Promise<{ q?: string }>; // Next.js 15
}

export const metadata = {
  title: "全站搜索 · 老吴的工作站",
};

export default async function SearchPage({ searchParams }: PageProps) {
  const { q } = await searchParams;
  const keyword = (q ?? "").trim();
  const results = keyword
    ? contentIndex.filter((item) =>
        [item.title, item.summary, item.category, item.tags.join(" ")]
          .join(" ")
          .toLowerCase()
          .includes(keyword.toLowerCase())
      )
    : [];

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <header className="border-b border-white/10 bg-slate-950/80 backdrop-blur">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-5">
          <Link href="/" className="text-lg font-semibold">
            老吴的工作站
          </Link>
          <nav className="flex items-center gap-6 text-sm text-white/70">
            <Link href="/search" className="text-white">搜索</Link>
            <Link href="/tags">标签</Link>
            <Link href="/categories">分类</Link>
          </nav>
        </div>
      </header>

      <main className="mx-auto w-full max-w-6xl px-6 py-12">
        <section className="rounded-3xl border border-white/10 bg-white/5 p-6">
          <h1 className="text-2xl font-semibold">全站搜索</h1>
          <p className="mt-2 text-sm text-white/80">
            文章、工具、系列均可检索。
          </p>
          <form className="mt-5" action="/search" method="get">
            <input
              name="q"
              defaultValue={keyword}
              placeholder="输入关键词"
              className="w-full rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white placeholder:text-white/40"
            />
          </form>
        </section>

        <section className="mt-10">
          {keyword ? (
            <>
              <p className="text-sm text-white/70">
                共找到 <span className="text-white">{results.length}</span> 条结果
              </p>
              <div className="mt-6 grid gap-6 lg:grid-cols-2">
                {results.map((item) => (
                  <Link
                    key={item.id}
                    href={item.href}
                    className="rounded-3xl border border-white/10 bg-white/5 p-6"
                  >
                    <p className="text-xs uppercase tracking-[0.3em] text-white/70">
                      {item.type} · {item.category}
                    </p>
                    <h2 className="mt-3 text-lg font-semibold">{item.title}</h2>
                    <p className="mt-2 text-sm text-white/85">{item.summary}</p>
                  </Link>
                ))}
              </div>
            </>
          ) : (
            <p className="text-sm text-white/60">请输入关键词开始搜索。</p>
          )}
        </section>
      </main>
    </div>
  );
}
