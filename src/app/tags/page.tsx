import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { allTags } from "@/data/content";

export const metadata = {
  title: "标签聚合 · 老吴的工作站",
};

export default function TagsPage() {
  return (
    <div className="min-h-screen text-white">
      <SiteHeader active="/tags" />

      <main className="mx-auto w-full max-w-6xl px-6 py-12">
        <h1 className="text-3xl font-semibold">标签聚合</h1>
        <p className="mt-3 text-sm text-muted">按标签浏览全部内容。</p>

        <div className="mt-8 flex flex-wrap gap-3">
          {allTags.map((tag) => (
            <Link
              key={tag}
              href={`/tags/${encodeURIComponent(tag)}`}
              className="rounded-full border border-[color:var(--border-muted)] bg-[color:var(--surface-2)] px-4 py-2 text-sm text-muted"
            >
              #{tag}
            </Link>
          ))}
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
