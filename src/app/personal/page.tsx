import Link from "next/link";
import AdSlot from "@/components/AdSlot";
import PersonalListClient from "@/components/PersonalListClient";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { personalSeries } from "@/data/personal";

export const metadata = {
  title: "个人博客 · 老吴的工作站",
};

export default function PersonalPage() {
  return (
    <div className="min-h-screen text-white">
      <SiteHeader active="/personal" />

      <main className="mx-auto w-full max-w-6xl px-6 py-12">
        <section className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-subtle">个人博客</p>
            <h1 className="mt-4 text-3xl font-semibold">
              工作复盘 · 生活记录 · 个人思考
            </h1>
            <p className="mt-3 text-sm text-muted">
              用结构化方式记录思考与成长，保持长期主义与清晰表达。
            </p>
          </div>
          <div className="rounded-3xl border border-[color:var(--border-muted)] bg-[color:var(--surface-1)] p-6">
            <h2 className="text-sm font-semibold text-muted">系列专题</h2>
            <div className="mt-4 space-y-3">
              {personalSeries.map((series) => (
                <Link
                  key={series.id}
                  href={`/personal/series/${series.id}`}
                  className="block rounded-2xl border border-[color:var(--border-muted)] bg-[color:var(--surface-2)] p-4"
                >
                  <p className="text-sm font-semibold">{series.title}</p>
                  <p className="mt-2 text-xs text-muted">{series.summary}</p>
                  <p className="mt-2 text-xs text-subtle">
                    {series.total} 集 · 更新 {series.updatedAt}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="mt-10">
          <AdSlot label="广告位 A（顶部横幅 · 6:1）" ratio="6/1" />
          <div className="mt-8">
            <PersonalListClient />
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
