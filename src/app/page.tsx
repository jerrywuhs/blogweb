import Link from "next/link";
import RealtimeTicker from "@/components/RealtimeTicker";

const featuredPosts = [
  {
    title: "FreqTrade 从 0 到 1：策略框架与实盘心法",
    summary: "一套可以直接落地的量化交易学习路线，涵盖架构、回测、风控。",
    tag: "技术博客",
  },
  {
    title: "AI 工具最小闭环：从需求到上线",
    summary: "如何把一个工具类 idea 在 7 天内变成可用产品。",
    tag: "个人博客",
  },
  {
    title: "实时数据看板的设计方法",
    summary: "适用于交易、运营、内容平台的仪表盘布局与动效策略。",
    tag: "技术博客",
  },
];

const tools = [
  {
    name: "AI 合同分析",
    desc: "上传合同，自动提炼关键风险条款与建议。",
    type: "REST",
  },
  {
    name: "舆情速览",
    desc: "多源信息聚合、热点趋势与关键摘要。",
    type: "WebSocket",
  },
  {
    name: "内容结构化助手",
    desc: "将长文快速拆解成卡片/大纲/行动清单。",
    type: "SSE",
  },
];

const stats = [
  { label: "文章", value: "128+" },
  { label: "工具", value: "12" },
  { label: "系列课程", value: "8" },
  { label: "更新频率", value: "每周" },
];

const tags = [
  "AI 编程",
  "量化策略",
  "工具评测",
  "工作复盘",
  "内容运营",
  "增长实验",
];

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <header className="border-b border-white/10 bg-slate-950/80 backdrop-blur">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-5">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-2xl bg-gradient-to-br from-indigo-500 via-sky-500 to-emerald-400" />
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-white/50">个人品牌站</p>
              <h1 className="text-xl font-semibold">老吴的工作站</h1>
            </div>
          </div>
          <nav className="hidden items-center gap-8 text-sm text-white/70 md:flex">
            <Link href="#home" className="hover:text-white">
              首页
            </Link>
            <Link href="#tech" className="hover:text-white">
              技术博客
            </Link>
            <Link href="#life" className="hover:text-white">
              个人博客
            </Link>
            <Link href="#tools" className="hover:text-white">
              AI 工具
            </Link>
            <Link href="#contact" className="hover:text-white">
              关于/联系
            </Link>
          </nav>
          <button className="rounded-full border border-white/20 px-4 py-2 text-sm text-white/80 hover:border-white/60">
            订阅更新
          </button>
        </div>
      </header>

      <main id="home" className="mx-auto w-full max-w-6xl px-6 pb-24 pt-14">
        <section className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.25em] text-white/70">
              AI 博客 · 工具 · 内容实验室
            </div>
            <h2 className="text-4xl font-semibold leading-tight md:text-5xl">
              一个聚合技术洞察、个人复盘与 AI 工具体验的品牌站
            </h2>
            <p className="text-lg text-white/70">
              聚焦 AI 编程、量化策略与工具体验。所有内容均以可读性、可复用和实际落地为核心，持续输出结构化内容与实用工具。
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900">
                查看最新内容
              </button>
              <button className="rounded-full border border-white/20 px-6 py-3 text-sm text-white/80">
                了解 AI 工具
              </button>
            </div>
            <RealtimeTicker />
          </div>

          <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900 via-slate-950 to-black p-6">
            <p className="text-xs uppercase tracking-[0.35em] text-white/40">数据看板</p>
            <div className="mt-6 grid grid-cols-2 gap-4">
              {stats.map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl border border-white/10 bg-white/5 p-4"
                >
                  <p className="text-xs text-white/50">{item.label}</p>
                  <p className="mt-2 text-2xl font-semibold">{item.value}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-4">
              <p className="text-sm text-white/70">本周内容热度</p>
              <div className="mt-4 grid grid-cols-6 items-end gap-2">
                {[40, 60, 35, 80, 55, 70].map((value, index) => (
                  <div
                    key={index}
                    className="rounded-full bg-gradient-to-t from-emerald-400/70 via-sky-400/60 to-indigo-400/70"
                    style={{ height: `${value}px` }}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="mt-12 grid gap-4 rounded-3xl border border-white/10 bg-white/5 p-6 md:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="text-sm text-white/60">广告位 A（顶部横幅 · 6:1）</p>
            <div className="mt-3 h-24 rounded-2xl border border-dashed border-white/20" />
          </div>
          <div className="flex flex-wrap items-center gap-2 text-sm text-white/60">
            {tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-white/10 bg-white/5 px-3 py-1"
              >
                #{tag}
              </span>
            ))}
          </div>
        </section>

        <section id="tech" className="mt-16">
          <div className="flex items-center justify-between">
            <h3 className="text-2xl font-semibold">推荐内容</h3>
            <span className="text-sm text-white/60">最新 · 精选 · 系列</span>
          </div>
          <div className="mt-6 grid gap-6 lg:grid-cols-3">
            {featuredPosts.map((post) => (
              <article
                key={post.title}
                className="rounded-3xl border border-white/10 bg-white/5 p-6 transition hover:border-white/30"
              >
                <span className="text-xs uppercase tracking-[0.3em] text-white/40">
                  {post.tag}
                </span>
                <h4 className="mt-4 text-lg font-semibold">{post.title}</h4>
                <p className="mt-3 text-sm text-white/70">{post.summary}</p>
                <button className="mt-6 text-sm font-semibold text-emerald-300">
                  阅读详情 →
                </button>
              </article>
            ))}
          </div>
        </section>

        <section id="tools" className="mt-16">
          <div className="flex items-center justify-between">
            <h3 className="text-2xl font-semibold">AI 工具推荐</h3>
            <span className="text-sm text-white/60">REST · WebSocket · SSE</span>
          </div>
          <div className="mt-6 grid gap-6 lg:grid-cols-3">
            {tools.map((tool) => (
              <div
                key={tool.name}
                className="rounded-3xl border border-white/10 bg-white/5 p-6"
              >
                <div className="flex items-center justify-between">
                  <h4 className="text-lg font-semibold">{tool.name}</h4>
                  <span className="rounded-full border border-white/20 px-3 py-1 text-xs text-white/70">
                    {tool.type}
                  </span>
                </div>
                <p className="mt-3 text-sm text-white/70">{tool.desc}</p>
                <div className="mt-6 flex items-center gap-2 text-xs text-white/50">
                  <span className="rounded-full bg-emerald-500/10 px-2 py-1 text-emerald-300">
                    在线体验
                  </span>
                  <span className="rounded-full bg-white/10 px-2 py-1">API 接入</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="life" className="mt-16 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-xl font-semibold">个人博客 · 工作与生活复盘</h3>
            <p className="mt-3 text-sm text-white/70">
              分享决策复盘、工作方法论与长期思考，用结构化方式沉淀经验。
            </p>
            <div className="mt-6 space-y-4">
              {[
                "复盘：内容型产品的增长瓶颈与突破",
                "AI 时代的个人工作流重新设计",
                "一年一次的系统性目标复盘",
              ].map((title) => (
                <div
                  key={title}
                  className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-3"
                >
                  <span className="text-sm text-white/80">{title}</span>
                  <span className="text-xs text-white/50">6 min read</span>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-3xl border border-white/10 bg-gradient-to-b from-slate-900 to-slate-950 p-6">
            <p className="text-sm text-white/60">广告位 B（信息流插入 · 4:3）</p>
            <div className="mt-4 h-60 rounded-2xl border border-dashed border-white/20" />
          </div>
        </section>

        <section id="contact" className="mt-16 rounded-3xl border border-white/10 bg-white/5 p-8">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <h3 className="text-2xl font-semibold">关于 / 联系</h3>
              <p className="mt-3 text-sm text-white/70">
                如果你对 AI 工具、内容合作、项目共建有想法，欢迎联系。这里也会持续更新项目进展与个人复盘。
              </p>
              <div className="mt-6 flex flex-wrap gap-3 text-sm text-white/70">
                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">
                  邮箱：wuhs7806@gmail.com
                </span>
                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">
                  城市：中国 · 远程协作
                </span>
              </div>
            </div>
            <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900 via-slate-950 to-black p-6">
              <div className="h-48 rounded-2xl border border-white/10 bg-[radial-gradient(circle_at_top,_rgba(129,140,248,0.35),_rgba(15,23,42,0.9))]" />
              <p className="mt-4 text-xs text-white/50">
                照片展示位（禁止右键/拖拽保存，后续实现）
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
