import Link from "next/link";
import { contentIndex } from "@/data/content";

interface PageProps {
  params: Promise<{ tag: string }>;
}

export default async function TagDetail({ params }: PageProps) {
  const { tag } = await params;
  const decoded = decodeURIComponent(tag);
  const results = contentIndex.filter((item) => item.tags.includes(decoded));

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <header className="border-b border-white/10 bg-slate-950/80 backdrop-blur">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-5">
          <Link href="/tags" className="text-sm text-white/70">
            ← 返回标签
          </Link>
          <span className="text-xs uppercase tracking-[0.3em] text-white/40">标签</span>
        </div>
      </header>

      <main className="mx-auto w-full max-w-6xl px-6 py-12">
        <h1 className="text-3xl font-semibold">#{decoded}</h1>
        <p className="mt-3 text-sm text-white/80">共 {results.length} 条内容</p>

        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          {results.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              className="rounded-3xl border border-white/10 bg-white/5 p-6"
            >
              <p className="text-xs uppercase tracking-[0.3em] text-white/70">
                {item.type} · {item.category}
              </p>
              <h2 className="mt-3 text-lg font-semibold">{item.title}</h2>
              <p className="mt-2 text-sm text-white/85">{item.summary}</p>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}
