import AdSlot from "@/components/AdSlot";
import ToolsListClient from "@/components/ToolsListClient";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

export const metadata = {
  title: "AI 工具 · 老吴的工作站",
};

export default function ToolsPage() {
  return (
    <div className="min-h-screen text-white">
      <SiteHeader active="/tools" />

      <main className="mx-auto w-full max-w-6xl px-6 py-12">
        <section className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-subtle">AI 工具</p>
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
      <SiteFooter />
    </div>
  );
}
