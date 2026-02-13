import Link from "next/link";
import AdSlot from "@/components/AdSlot";
import TechListClient from "@/components/TechListClient";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { techSeries } from "@/data/tech";

export const metadata = {
  title: "技术博客 · jerrywu 的博客",
};

export default function TechPage() {
  return (
    <div className="min-h-screen text-white">
      <SiteHeader active="/tech" />

      <main className="mx-auto w-full max-w-6xl px-6 py-12">
        <section className="grid gap-8 lg:grid-cols-[280px_1fr]">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-subtle">技术博客</p>
            <h1 className="mt-4 text-3xl font-semibold">
              AI 编程 · 量化策略 · 工具实践
            </h1>
            <p className="mt-3 text-sm text-muted">
              系统化输出技术路线、实战复盘与工具拆解，保持结构化与可复用。
            </p>
            
            {/* 系列课程 - 移到底部更合理 */}
            <div className="mt-8 rounded-3xl border border-[color:var(--border-muted)] bg-[color:var(--surface-1)] p-5">
              <h2 className="text-sm font-semibold text-muted">系列课程</h2>
              <div className="mt-4 space-y-3">
                {techSeries.map((series) => (
                  <Link
                    key={series.id}
                    href={`/tech/series/${series.id}`}
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
            <TechListClient />
          </div>
        </section>

        <section className="mt-10">
          <TechListClient />
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
