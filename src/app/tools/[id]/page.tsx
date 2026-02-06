import Link from "next/link";
import { notFound } from "next/navigation";
import { getTool, tools } from "@/data/tools";

interface PageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return tools.map((tool) => ({ id: tool.id }));
}

export default async function ToolDetail({ params }: PageProps) {
  const { id } = await params;
  const tool = getTool(id);
  if (!tool) return notFound();

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <header className="border-b border-white/10 bg-slate-950/80 backdrop-blur">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-5">
          <Link href="/tools" className="text-sm text-white/70">
            ← 返回 AI 工具
          </Link>
          <span className="text-xs uppercase tracking-[0.3em] text-white/40">
            {tool.apiType}
          </span>
        </div>
      </header>

      <main className="mx-auto w-full max-w-6xl px-6 py-12">
        <section className="space-y-4">
          <p className="text-xs uppercase tracking-[0.3em] text-white/70">
            {tool.category}
          </p>
          <h1 className="text-3xl font-semibold">{tool.name}</h1>
          <p className="text-sm text-white/85">{tool.summary}</p>
        </section>

        <section className="mt-10 grid gap-8 lg:grid-cols-[1fr_320px]">
          <div className="space-y-6">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <h2 className="text-lg font-semibold">工具介绍</h2>
              <p className="mt-3 text-sm text-white/85">
                这里是工具的功能说明与使用场景介绍。后续可根据不同 AI 工具需求替换为定制内容。
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <h2 className="text-lg font-semibold">交互区域（预留）</h2>
              <p className="mt-3 text-sm text-white/70">
                TODO：根据具体 AI 工具定义输入区、参数区、调用状态与结果展示。
              </p>
              <div className="mt-4 h-40 rounded-2xl border border-dashed border-white/20" />
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <h2 className="text-lg font-semibold">结果展示（预留）</h2>
              <p className="mt-3 text-sm text-white/70">
                TODO：支持文本、结构化数据、图片或文件下载等结果展示。
              </p>
              <div className="mt-4 h-40 rounded-2xl border border-dashed border-white/20" />
            </div>
          </div>

          <aside className="space-y-4">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
              <h3 className="text-sm font-semibold text-white/70">接口信息</h3>
              <div className="mt-3 space-y-2 text-xs text-white/60">
                <p>· 接口类型：{tool.apiType}</p>
                <p>· 访问方式：待定义</p>
                <p>· 限流策略：待定义</p>
              </div>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
              <p className="text-sm text-white/70">FAQ（预留）</p>
              <div className="mt-3 h-32 rounded-2xl border border-dashed border-white/20" />
            </div>
          </aside>
        </section>
      </main>
    </div>
  );
}
