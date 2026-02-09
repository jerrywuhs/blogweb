import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { personalSeries } from "@/data/personal";

export const metadata = {
  title: "个人博客系列 · jerrywu 的博客",
};

export default function PersonalSeriesPage() {
  return (
    <div className="min-h-screen text-white">
      <SiteHeader active="/personal" />

      <main className="mx-auto w-full max-w-6xl px-6 py-12">
        <h1 className="text-3xl font-semibold">个人系列专题</h1>
        <p className="mt-3 text-sm text-muted">
          按系列沉淀工作与生活记录，便于长期回顾与复用。
        </p>

        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          {personalSeries.map((series) => (
            <Link
              key={series.id}
              href={`/personal/series/${series.id}`}
              className="rounded-3xl border border-[color:var(--border-muted)] bg-[color:var(--surface-1)] p-6"
            >
              <p className="text-xs uppercase tracking-[0.3em] text-subtle">
                系列 · {series.total} 集
              </p>
              <h2 className="mt-3 text-lg font-semibold">{series.title}</h2>
              <p className="mt-3 text-sm text-muted">{series.summary}</p>
              <p className="mt-3 text-xs text-subtle">更新 {series.updatedAt}</p>
            </Link>
          ))}
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
