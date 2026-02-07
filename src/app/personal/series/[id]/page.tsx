import Link from "next/link";
import { notFound } from "next/navigation";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
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
    .sort((a, b) => (a.episode ?? 0) - (b.episode ?? 0));

  return (
    <div className="min-h-screen text-white">
      <SiteHeader active="/personal" />

      <main className="mx-auto w-full max-w-6xl px-6 py-12">
        <h1 className="text-3xl font-semibold">{series.title}</h1>
        <p className="mt-3 text-sm text-muted">{series.summary}</p>
        <p className="mt-3 text-xs text-subtle">共 {series.total} 集 · 更新 {series.updatedAt}</p>

        <div className="mt-8 space-y-4">
          {episodes.map((ep) => (
            <Link
              key={ep.slug}
              href={`/personal/${ep.slug}`}
              className="flex items-center justify-between rounded-2xl border border-[color:var(--border-muted)] bg-[color:var(--surface-2)] px-4 py-3"
            >
              <span className="text-sm text-muted">{ep.title}</span>
              <span className="text-xs text-subtle">第 {ep.episode} 集</span>
            </Link>
          ))}
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
