import Link from "next/link";
import { techSeries } from "@/data/tech";

export const metadata = {
  title: "技术博客系列 · 老吴的工作站",
};

export default function TechSeriesPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <header className="border-b border-white/10 bg-slate-950/80 backdrop-blur">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-5">
          <Link href="/tech" className="text-sm text-white/70">
            ← 返回技术博客
          </Link>
          <span className="text-xs uppercase tracking-[0.3em] text-white/40">系列聚合</span>
        </div>
      </header>

      <main className="mx-auto w-full max-w-6xl px-6 py-12">
        <h1 className="text-3xl font-semibold">技术系列课程</h1>
        <p className="mt-3 text-sm text-white/70">
          按系列聚合技术路线，支持长期更新与模块化学习。
        </p>

        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          {techSeries.map((series) => (
            <Link
              key={series.id}
              href={`/tech/series/${series.id}`}
              className="rounded-3xl border border-white/10 bg-white/5 p-6"
            >
              <p className="text-xs uppercase tracking-[0.3em] text-white/40">
                系列 · {series.total} 集
              </p>
              <h2 className="mt-3 text-lg font-semibold">{series.title}</h2>
              <p className="mt-3 text-sm text-white/70">{series.summary}</p>
              <p className="mt-3 text-xs text-white/50">更新 {series.updatedAt}</p>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}
