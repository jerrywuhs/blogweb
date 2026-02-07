import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import { allCategories } from "@/data/content";

export const metadata = {
  title: "分类聚合 · 老吴的工作站",
};

export default function CategoriesPage() {
  return (
    <div className="min-h-screen text-white">
      <SiteHeader active="/categories" />

      <main className="mx-auto w-full max-w-6xl px-6 py-12">
        <h1 className="text-3xl font-semibold">分类聚合</h1>
        <p className="mt-3 text-sm text-muted">按分类浏览内容。</p>

        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          {allCategories.map((category) => (
            <Link
              key={category}
              href={`/categories/${encodeURIComponent(category)}`}
              className="rounded-3xl border border-[color:var(--border-muted)] bg-[color:var(--surface-1)] p-6"
            >
              <h2 className="text-lg font-semibold">{category}</h2>
              <p className="mt-2 text-sm text-muted">查看该分类下的内容</p>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}
