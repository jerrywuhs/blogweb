import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { contentIndex } from "@/data/content";

interface PageProps {
  params: Promise<{ category: string }>;
}

export default async function CategoryDetail({ params }: PageProps) {
  const { category } = await params;
  const decoded = decodeURIComponent(category);
  const results = contentIndex.filter((item) => item.category === decoded);

  return (
    <div className="min-h-screen text-white">
      <SiteHeader active="/categories" />

      <main className="mx-auto w-full max-w-6xl px-6 py-12">
        <h1 className="text-3xl font-semibold">{decoded}</h1>
        <p className="mt-3 text-sm text-muted">共 {results.length} 条内容</p>

        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          {results.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              className="rounded-3xl border border-[color:var(--border-muted)] bg-[color:var(--surface-1)] p-6"
            >
              <p className="text-xs uppercase tracking-[0.3em] text-subtle">
                {item.type}
              </p>
              <h2 className="mt-3 text-lg font-semibold">{item.title}</h2>
              <p className="mt-2 text-sm text-muted">{item.summary}</p>
            </Link>
          ))}
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
