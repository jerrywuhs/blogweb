import Link from "next/link";
import { allTags } from "@/data/content";

export const metadata = {
  title: "标签聚合 · 老吴的工作站",
};

export default function TagsPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <header className="border-b border-white/10 bg-slate-950/80 backdrop-blur">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-5">
          <Link href="/" className="text-lg font-semibold">
            老吴的工作站
          </Link>
          <nav className="flex items-center gap-6 text-sm text-white/70">
            <Link href="/tags" className="text-white">标签</Link>
            <Link href="/categories">分类</Link>
            <Link href="/search">搜索</Link>
          </nav>
        </div>
      </header>

      <main className="mx-auto w-full max-w-6xl px-6 py-12">
        <h1 className="text-3xl font-semibold">标签聚合</h1>
        <p className="mt-3 text-sm text-white/80">按标签浏览全部内容。</p>

        <div className="mt-8 flex flex-wrap gap-3">
          {allTags.map((tag) => (
            <Link
              key={tag}
              href={`/tags/${encodeURIComponent(tag)}`}
              className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80"
            >
              #{tag}
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}
