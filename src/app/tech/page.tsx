import Link from "next/link";
import AdSlot from "@/components/AdSlot";
import TechListClient from "@/components/TechListClient";
import SiteHeader from "@/components/SiteHeader";
import { techSeries } from "@/data/tech";

export const metadata = {
  title: "技术博客 · 老吴的工作站",
};

export default function TechPage() {
  return (
    <div className="min-h-screen text-white">
      <SiteHeader active="/tech" />

      <main className="mx-auto w-full max-w-6xl px-6 py-12">
        <section className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-white/50">技术博客</p>
            <h1 className="mt-4 text-3xl font-semibold">
              AI 编程 · 量化策略 · 工具实践
            </h1>
            <p className="mt-3 text-sm text-white/85">
              系统化输出技术路线、实战复盘与工具拆解，保持结构化与可复用。
            </p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-sm font-semibold text-white/70">系列课程</h2>
            <div className="mt-4 space-y-3">
              {techSeries.map((series) => (
                <Link
                  key={series.id}
                  href={`/tech/series/${series.id}`}
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

        <section className="mt-10">
          <AdSlot label="广告位 A（顶部横幅 · 6:1）" ratio="6/1" />
          <div className="mt-8">
            <TechListClient />
          </div>
        </section>
      </main>
    </div>
  );
}
