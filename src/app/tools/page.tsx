import Link from "next/link";
import { tools } from "@/data/tools";

export const metadata = {
  title: "AI 工具 · 老吴的工作站",
};

export default function ToolsPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <header className="border-b border-white/10 bg-slate-950/80 backdrop-blur">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-5">
          <Link href="/" className="text-lg font-semibold">
            老吴的工作站
          </Link>
          <nav className="flex items-center gap-6 text-sm text-white/70">
            <Link href="/tools" className="text-white">
              AI 工具
            </Link>
            <Link href="/tech">技术博客</Link>
            <Link href="/personal">个人博客</Link>
          </nav>
        </div>
      </header>

      <main className="mx-auto w-full max-w-6xl px-6 py-12">
        <section className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-white/60">AI 工具</p>
            <h1 className="mt-4 text-3xl font-semibold">
              面向业务场景的 AI 工具集合
            </h1>
            <p className="mt-3 text-sm text-white/85">
              提供可演示的 AI 能力入口，支持 REST / WebSocket / SSE。
            </p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <h2 className="text-sm font-semibold text-white/70">工具筛选（预留）</h2>
            <div className="mt-4 space-y-3 text-xs text-white/60">
              <p>· 分类筛选</p>
              <p>· 标签筛选</p>
              <p>· 价格/状态</p>
              <p>· 搜索与排序</p>
            </div>
          </div>
        </section>

        <section className="mt-10 grid gap-6 lg:grid-cols-3">
          {tools.map((tool) => (
            <article
              key={tool.id}
              className="rounded-3xl border border-white/10 bg-white/5 p-6"
            >
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-white/70">
                    {tool.category}
                  </p>
                  <h3 className="mt-3 text-lg font-semibold">{tool.name}</h3>
                </div>
                <span className="rounded-full border border-white/20 px-3 py-1 text-xs text-white/70">
                  {tool.apiType}
                </span>
              </div>
              <p className="mt-3 text-sm text-white/85">{tool.summary}</p>
              <div className="mt-4 flex flex-wrap gap-2 text-xs text-white/50">
                {tool.tags.map((tag) => (
                  <span key={tag} className="rounded-full bg-white/10 px-2 py-1">
                    #{tag}
                  </span>
                ))}
              </div>
              <Link
                href={`/tools/${tool.id}`}
                className="mt-6 inline-flex text-sm font-semibold text-emerald-300"
              >
                进入工具 →
              </Link>
            </article>
          ))}
        </section>
      </main>
    </div>
  );
}
