import Link from "next/link";
import { notFound } from "next/navigation";
import AdSlot from "@/components/AdSlot";
import ToolExperienceClient from "@/components/ToolExperienceClient";
import SiteHeader from "@/components/SiteHeader";
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
    <div className="min-h-screen text-white">
      <SiteHeader active="/tools" />

      <main className="mx-auto w-full max-w-6xl px-6 pb-20 pt-12">
        <section className="rounded-[32px] border border-white/10 bg-white/5 p-8 md:p-10">
          <div className="flex flex-wrap items-center justify-between gap-4 text-sm text-white/60">
            <Link href="/tools" className="inline-flex items-center gap-2 text-white/70">
              ← 返回 AI 工具
            </Link>
            <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.3em]">
              {tool.apiType}
            </span>
          </div>
          <p className="mt-6 text-sm uppercase tracking-[0.35em] text-white/60">
            {tool.category}
          </p>
          <h1 className="mt-4 text-4xl font-semibold md:text-5xl">{tool.name}</h1>
          <p className="mt-4 text-base text-white/85">{tool.summary}</p>
        </section>

        <section className="mt-10 grid gap-8 lg:grid-cols-[1fr_320px]">
          <div className="space-y-6 text-[17px] leading-relaxed text-white/85">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
              <h2 className="text-2xl font-semibold">工具介绍</h2>
              <p className="mt-4">
                该工具提供可演示的 AI 能力入口，适合业务人员快速验证场景价值，并支持后续 API 对接。
              </p>
            </div>

            <ToolExperienceClient defaultPrompt="请粘贴需要分析的文本或描述需求。" />
          </div>

          <aside className="space-y-4">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-sm font-semibold text-white/70">接口信息</h3>
              <div className="mt-4 space-y-2 text-sm text-white/60">
                <p>· 接口类型：{tool.apiType}</p>
                <p>· 端点：{tool.api.endpoint}</p>
                <p>· 限流策略：{tool.quotaLimit}</p>
              </div>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-sm font-semibold text-white/70">收费信息</h3>
              <div className="mt-4 space-y-2 text-sm text-white/60">
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
