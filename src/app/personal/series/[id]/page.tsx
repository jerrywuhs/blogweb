import Link from "next/link";
import { notFound } from "next/navigation";
import { getPersonalSeries, personalPosts, personalSeries } from "@/data/personal";

interface PageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return personalSeries.map((series) => ({ id: series.id }));
}

export default async function PersonalSeriesDetail({ params }: PageProps) {
  const { id } = await params;
  const series = getPersonalSeries(id);
  if (!series) return notFound();

  const episodes = personalPosts
    .filter((post) => post.seriesId === id)
    .sort((a, b) => a.episode - b.episode);

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <header className="border-b border-white/10 bg-slate-950/80 backdrop-blur">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-5">
          <Link href="/personal/series" className="text-sm text-white/70">
            ← 返回系列
          </Link>
          <span className="text-xs uppercase tracking-[0.3em] text-white/40">系列详情</span>
        </div>
      </header>

      <main className="mx-auto w-full max-w-6xl px-6 py-12">
        <h1 className="text-3xl font-semibold">{series.title}</h1>
        <p className="mt-3 text-sm text-white/85">{series.summary}</p>
        <p className="mt-3 text-xs text-white/70">共 {series.total} 集 · 更新 {series.updatedAt}</p>

        <div className="mt-8 space-y-4">
          {episodes.map((ep) => (
            <Link
              key={ep.slug}
              href={`/personal/${ep.slug}`}
              className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-3"
            >
              <span className="text-sm text-white/80">{ep.title}</span>
              <span className="text-xs text-white/50">第 {ep.episode} 集</span>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}
