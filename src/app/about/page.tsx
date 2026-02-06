import Link from "next/link";
import AboutPhotoClient from "@/components/AboutPhotoClient";

export const metadata = {
  title: "关于 / 联系 · 老吴的工作站",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <header className="border-b border-white/10 bg-slate-950/80 backdrop-blur">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-5">
          <Link href="/" className="text-lg font-semibold">
            老吴的工作站
          </Link>
          <nav className="flex items-center gap-6 text-sm text-white/70">
            <Link href="/tech">技术博客</Link>
            <Link href="/personal">个人博客</Link>
            <Link href="/tools">AI 工具</Link>
            <Link href="/guestbook">留言板</Link>
          </nav>
        </div>
      </header>

      <main className="mx-auto w-full max-w-6xl px-6 py-12">
        <section className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-6">
            <p className="text-xs uppercase tracking-[0.3em] text-white/50">About</p>
            <h1 className="text-3xl font-semibold">关于 / 联系</h1>
            <p className="text-sm text-white/80">
              这里记录技术实践、产品复盘与工具实验。欢迎交流 AI 工具、内容合作或项目共建。
            </p>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                { label: "邮箱", value: "wuhs7806@gmail.com" },
                { label: "定位", value: "AI 产品 · 量化 · 内容运营" },
                { label: "合作", value: "项目共建 / 工具定制" },
                { label: "所在", value: "中国 · Remote" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl border border-white/10 bg-white/5 p-4"
                >
                  <p className="text-xs text-white/50">{item.label}</p>
                  <p className="mt-2 text-sm text-white/85">{item.value}</p>
                </div>
              ))}
            </div>

            <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900 via-slate-950 to-black p-6">
              <p className="text-xs uppercase tracking-[0.3em] text-white/50">Profile</p>
              <ul className="mt-4 space-y-2 text-sm text-white/80">
                <li>· 聚焦 AI 编程、量化策略、工具产品化</li>
                <li>· 擅长流程化拆解与多端体验设计</li>
                <li>· 持续输出教程、复盘与工具演示</li>
              </ul>
            </div>
          </div>

          <div className="space-y-6">
            <AboutPhotoClient />
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <h2 className="text-lg font-semibold">快速联系</h2>
              <p className="mt-3 text-sm text-white/70">
                可通过留言板提交需求或建议，我们会在 48 小时内回复。
              </p>
              <Link
                href="/guestbook"
                className="mt-4 inline-flex text-sm font-semibold text-emerald-300"
              >
                前往留言板 →
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
