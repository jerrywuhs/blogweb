import Link from "next/link";
import { notFound } from "next/navigation";
import AdSlot from "@/components/AdSlot";
import ToolExperienceClient from "@/components/ToolExperienceClient";
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
                该工具提供可演示的 AI 能力入口，适合业务人员快速验证场景价值，并支持后续 API 对接。
              </p>
            </div>

            <ToolExperienceClient defaultPrompt="请粘贴需要分析的文本或描述需求。" />
          </div>

          <aside className="space-y-4">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
              <h3 className="text-sm font-semibold text-white/70">接口信息</h3>
              <div className="mt-3 space-y-2 text-xs text-white/60">
                <p>· 接口类型：{tool.apiType}</p>
                <p>· 端点：{tool.api.endpoint}</p>
                <p>· 限流策略：{tool.quotaLimit}</p>
              </div>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
              <h3 className="text-sm font-semibold text-white/70">收费信息</h3>
              <div className="mt-3 space-y-2 text-xs text-white/60">
                <p>· 计费：{tool.pricingType === "free" ? "免费" : `¥${tool.price}/${tool.billingUnit}`}</p>
                <p>· 配额：{tool.quotaLimit}</p>
              </div>
            </div>
            <AdSlot label="广告位 C（详情页末尾 · 4:3）" ratio="4/3" />
          </aside>
        </section>
      </main>
    </div>
  );
}
