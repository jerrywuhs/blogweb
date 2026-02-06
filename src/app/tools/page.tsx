import Link from "next/link";
import AdSlot from "@/components/AdSlot";
import ToolsListClient from "@/components/ToolsListClient";

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
            <Link href="/about">关于</Link>
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
          <AdSlot label="广告位 A（顶部横幅 · 6:1）" ratio="6/1" />
        </section>

        <section className="mt-10">
          <ToolsListClient />
        </section>
      </main>
    </div>
  );
}
