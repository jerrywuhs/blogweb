import Link from "next/link";
import { allCategories } from "@/data/content";

export const metadata = {
  title: "分类聚合 · 老吴的工作站",
};

export default function CategoriesPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <header className="border-b border-white/10 bg-slate-950/80 backdrop-blur">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-5">
          <Link href="/" className="text-lg font-semibold">
            老吴的工作站
          </Link>
          <nav className="flex items-center gap-6 text-sm text-white/70">
            <Link href="/categories" className="text-white">分类</Link>
            <Link href="/tags">标签</Link>
            <Link href="/search">搜索</Link>
          </nav>
        </div>
      </header>

      <main className="mx-auto w-full max-w-6xl px-6 py-12">
        <h1 className="text-3xl font-semibold">分类聚合</h1>
        <p className="mt-3 text-sm text-white/80">按分类浏览内容。</p>

        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          {allCategories.map((category) => (
            <Link
              key={category}
              href={`/categories/${encodeURIComponent(category)}`}
              className="rounded-3xl border border-white/10 bg-white/5 p-6"
            >
              <h2 className="text-lg font-semibold">{category}</h2>
              <p className="mt-2 text-sm text-white/70">查看该分类下的内容</p>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}
