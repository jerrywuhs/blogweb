import Link from "next/link";
import { personalSeries } from "@/data/personal";

export const metadata = {
  title: "个人博客系列 · 老吴的工作站",
};

export default function PersonalSeriesPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <header className="border-b border-white/10 bg-slate-950/80 backdrop-blur">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-5">
          <Link href="/personal" className="text-sm text-white/70">
            ← 返回个人博客
          </Link>
          <span className="text-xs uppercase tracking-[0.3em] text-white/40">系列聚合</span>
        </div>
      </header>

      <main className="mx-auto w-full max-w-6xl px-6 py-12">
        <h1 className="text-3xl font-semibold">个人系列专题</h1>
        <p className="mt-3 text-sm text-white/85">
          按系列沉淀工作与生活记录，便于长期回顾与复用。
        </p>

        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          {personalSeries.map((series) => (
            <Link
              key={series.id}
              href={`/personal/series/${series.id}`}
              className="rounded-3xl border border-white/10 bg-white/5 p-6"
            >
              <p className="text-xs uppercase tracking-[0.3em] text-white/70">
                系列 · {series.total} 集
              </p>
              <h2 className="mt-3 text-lg font-semibold">{series.title}</h2>
              <p className="mt-3 text-sm text-white/85">{series.summary}</p>
              <p className="mt-3 text-xs text-white/70">更新 {series.updatedAt}</p>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}
