import Link from "next/link";
import AdSlot from "@/components/AdSlot";
import PersonalListClient from "@/components/PersonalListClient";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { personalSeries } from "@/data/personal";

export const metadata = {
  title: "个人博客 · jerrywu 的博客",
};

export default function PersonalPage() {
  return (
    <div className="min-h-screen text-white">
      <SiteHeader active="/personal" />

      <main className="mx-auto w-full max-w-6xl px-6 py-12">
        <section className="grid gap-8 lg:grid-cols-[280px_1fr]">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-subtle">个人博客</p>
            <h1 className="mt-4 text-3xl font-semibold">
              工作复盘 · 生活记录 · 个人思考
            </h1>
            <p className="mt-3 text-sm text-muted">
              用结构化方式记录思考与成长，保持长期主义与清晰表达。
            </p>
            
            {/* 系列专题 - 移到底部 */}
            <div className="mt-8 rounded-3xl border border-[color:var(--border-muted)] bg-[color:var(--surface-1)] p-5">
              <h2 className="text-sm font-semibold text-muted">系列专题</h2>
              <div className="mt-4 space-y-3">
                {personalSeries.map((series) => (
                  <Link
                    key={series.id}
                    href={`/personal/series/${series.id}`}
                    className="block rounded-xl border border-[color:var(--border-muted)] bg-[color:var(--surface-2)] p-3 transition hover:border-[color:var(--brand-primary)]"
                  >
                    <p className="text-sm font-semibold">{series.title}</p>
                    <p className="mt-1 text-xs text-subtle">
                      {series.total} 集 · 更新 {series.updatedAt}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <div>
            <PersonalListClient />
          </div>
        </section>

        <section className="mt-10">
          <PersonalListClient />
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
