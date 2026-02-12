import fs from "node:fs/promises";
import path from "node:path";
import Link from "next/link";
import matter from "gray-matter";
import RealtimeTicker from "@/components/RealtimeTicker";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import ProductPromotion from "@/components/ProductPromotion";

const CONTENT_DIR = path.join(process.cwd(), "content", "tech");

const fallbackFeaturedPosts = [
  {
    title: "AI 提示词工程实战：什么是结构化提示词",
    summary: "为什么你的 ChatGPT 回答总是很差？学会结构化提示词，让 AI 准确理解你的意图。",
    tag: "AI 提示词工程",
    href: "/tech/ai-prompt-engineering-intro",
  },
  {
    title: "FreqTrade 从 0 到 1：策略框架与实盘心法",
    summary: "一套可以直接落地的量化交易学习路线，涵盖架构，回测、风控。",
    tag: "技术博客",
    href: "/tech/freqtrade-0-1-ep1",
  },
  {
    title: "AI 工具最小闭环：从需求到上线",
    summary: "如何把一个工具类 idea 在 7 天内变成可用产品。",
    tag: "技术博客",
    href: "/tech/ai-tool-loop",
  },
];

async function getFeaturedPosts() {
  try {
    const files = await fs.readdir(CONTENT_DIR);
    const posts = [] as Array<{ title: string; summary: string; tag: string; href: string; date: string }>;

    for (const file of files) {
      if (!file.endsWith(".mdx")) continue;
      const raw = await fs.readFile(path.join(CONTENT_DIR, file), "utf8");
      const { data } = matter(raw);
      if (!data?.slug || !data?.title) continue;
      posts.push({
        title: String(data.title),
        summary: String(data.summary || ""),
        tag: String(data.category || "技术博客"),
        href: `/tech/${data.slug}`,
        date: String(data.date || ""),
      });
    }

    if (!posts.length) return fallbackFeaturedPosts;

    posts.sort((a, b) => (b.date || "").localeCompare(a.date || ""));
    return posts.slice(0, 3).map(({ date, ...rest }) => rest);
  } catch {
    return fallbackFeaturedPosts;
  }
}

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
  { label: "文章", value: "138+" },
  { label: "AI模板", value: "100+" },
  { label: "系列课程", value: "9" },
  { label: "更新频率", value: "每周" },
];

const tags = [
  "AI 编程",
  "量化策略",
  "提示词工程",
  "工具评测",
  "工作复盘",
  "内容运营",
];

export default async function Home() {
  const featuredPosts = await getFeaturedPosts();

  return (
    <div className="min-h-screen text-white">
      <SiteHeader active="/" />

      <main id="home" className="mx-auto w-full max-w-6xl px-6 pb-24 pt-14">
        <section className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-8 fade-in">
            <div className="inline-flex items-center gap-2 rounded-full border border-[color:var(--border-muted)] bg-[color:var(--surface-2)] px-4 py-2 text-xs uppercase tracking-[0.25em] text-subtle fade-in-delay-1">
              AI 博客 · 工具 · 内容实验室
            </div>
            <h2 className="text-4xl font-semibold leading-tight md:text-5xl fade-in-delay-2">
              一个聚合技术洞察、<span className="gradient-text">AI 效率</span>与工具体验的品牌站
            </h2>
            <p className="text-lg text-muted fade-in-delay-2">
              聚焦 AI 编程、量化策略与工具体验。所有内容均以可读性、可复用和实际落地为核心，持续输出结构化内容与实用工具。
            </p>
            <div className="flex flex-wrap gap-4 fade-in-delay-3">
              <Link
                href="/tech"
                className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 hover-lift"
              >
                查看最新内容
              </Link>
              <Link
                href="/tools"
                className="rounded-full border border-[color:var(--border-muted)] px-6 py-3 text-sm text-muted hover:border-[color:var(--brand-primary)] hover:text-[color:var(--brand-primary)]"
              >
                了解 AI 工具
              </Link>
            </div>
            <RealtimeTicker />
          </div>

          <div className="rounded-3xl border border-[color:var(--border-muted)] bg-gradient-to-br from-slate-900 via-slate-950 to-black p-6 hover-lift">
            <p className="text-xs uppercase tracking-[0.35em] text-subtle">数据看板</p>
            <div className="mt-6 grid grid-cols-2 gap-4">
              {stats.map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl border border-[color:var(--border-muted)] bg-[color:var(--surface-1)] p-4"
                >
                  <p className="text-xs text-subtle">{item.label}</p>
                  <p className="mt-2 text-2xl font-semibold">{item.value}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 rounded-2xl border border-[color:var(--border-muted)] bg-[color:var(--surface-1)] p-4">
              <p className="text-sm text-muted">本周内容热度</p>
              <div className="mt-4 grid grid-cols-6 items-end gap-2">
                {[40, 60, 35, 80, 55, 70].map((value, index) => (
                  <div
                    key={index}
                    className="rounded-full bg-gradient-to-t from-emerald-400/70 via-sky-400/60 to-indigo-400/70 transition-all duration-500 hover:from-emerald-400 hover:via-sky-400 hover:to-indigo-400"
                    style={{ height: `${value}px` }}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Product Promotion Section */}
        <ProductPromotion />

        <section className="mt-12 grid gap-4 rounded-3xl border border-[color:var(--border-muted)] bg-[color:var(--surface-1)] p-6 md:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="text-sm text-subtle">广告位 A（顶部横幅 · 6:1）</p>
            <div className="mt-3 h-24 rounded-2xl border border-dashed border-[color:var(--border-muted)]" />
          </div>
          <div className="flex flex-wrap items-center gap-2 text-sm text-subtle">
            {tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-[color:var(--border-muted)] bg-[color:var(--surface-2)] px-3 py-1 transition-all hover:border-[color:var(--brand-primary)]"
              >
                #{tag}
              </span>
            ))}
          </div>
        </section>

        <section id="tech" className="mt-16">
          <div className="flex items-center justify-between">
            <h3 className="text-2xl font-semibold">推荐内容</h3>
            <span className="text-sm text-subtle">最新 · 精选 · 系列</span>
          </div>
          <div className="mt-6 grid gap-6 lg:grid-cols-3">
            {featuredPosts.map((post, index) => (
              <article
                key={post.title}
                className="rounded-3xl border border-[color:var(--border-muted)] bg-[color:var(--surface-1)] p-6 transition-all hover-lift"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <span className="text-xs uppercase tracking-[0.3em] text-subtle">
                  {post.tag}
                </span>
                <h4 className="mt-4 text-lg font-semibold">{post.title}</h4>
                <p className="mt-3 text-sm text-muted">{post.summary}</p>
                <Link
                  href={post.href}
                  className="mt-6 inline-flex text-sm font-semibold text-emerald-300 transition-all hover:text-emerald-200"
                >
                  阅读详情 →
                </Link>
              </article>
            ))}
          </div>
        </section>

        <section id="tools" className="mt-16">
          <div className="flex items-center justify-between">
            <h3 className="text-2xl font-semibold">AI 工具推荐</h3>
            <span className="text-sm text-subtle">REST · WebSocket · SSE</span>
          </div>
          <div className="mt-6 grid gap-6 lg:grid-cols-3">
            {tools.map((tool, index) => (
              <div
                key={tool.name}
                className="rounded-3xl border border-[color:var(--border-muted)] bg-[color:var(--surface-1)] p-6 transition-all hover-lift"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center justify-between">
                  <h4 className="text-lg font-semibold">{tool.name}</h4>
                  <span className="rounded-full border border-[color:var(--border-muted)] px-3 py-1 text-xs text-subtle">
                    {tool.type}
                  </span>
                </div>
                <p className="mt-3 text-sm text-muted">{tool.desc}</p>
                <div className="mt-6 flex items-center gap-2 text-xs text-subtle">
                  <span className="rounded-full bg-emerald-500/10 px-2 py-1 text-emerald-300 transition-all hover:bg-emerald-500/20">
                    在线体验
                  </span>
                  <span className="rounded-full bg-white/10 px-2 py-1 transition-all hover:bg-white/20">
                    API 接入
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="life" className="mt-16 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-3xl border border-[color:var(--border-muted)] bg-[color:var(--surface-1)] p-6 transition-all hover-lift">
            <h3 className="text-xl font-semibold">个人博客 · 工作与生活复盘</h3>
            <p className="mt-3 text-sm text-muted">
              分享决策复盘、工作方法论与长期思考，用结构化方式沉淀经验。
            </p>
            <div className="mt-6 space-y-4">
              {[
                "复盘：内容型产品的增长瓶颈与突破",
                "AI 时代的个人工作流重新设计",
                "一年一次的系统性目标复盘",
              ].map((title, index) => (
                <div
                  key={title}
                  className="flex items-center justify-between rounded-2xl border border-[color:var(--border-muted)] bg-[color:var(--surface-2)] px-4 py-3 transition-all hover:border-[color:var(--brand-primary)]"
                >
                  <span className="text-sm text-muted transition-all hover:text-white">{title}</span>
                  <span className="text-xs text-subtle">6 min read</span>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-3xl border border-[color:var(--border-muted)] bg-gradient-to-b from-slate-900 to-slate-950 p-6 transition-all hover-lift">
            <p className="text-sm text-subtle">广告位 B（信息流插入 · 4:3）</p>
            <div className="mt-4 h-60 rounded-2xl border border-dashed border-[color:var(--border-muted)]" />
          </div>
        </section>

        <section id="contact" className="mt-16 rounded-3xl border border-[color:var(--border-muted)] bg-[color:var(--surface-1)] p-8">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <h3 className="text-2xl font-semibold">关于 / 联系</h3>
              <p className="mt-3 text-sm text-muted">
                如果你对 AI 工具、内容合作、项目共建有想法，欢迎联系。这里也会持续更新项目进展与个人复盘。
              </p>
              <div className="mt-6 flex flex-wrap gap-3 text-sm text-muted">
                <span className="rounded-full border border-[color:var(--border-muted)] bg-[color:var(--surface-2)] px-3 py-1 transition-all hover:border-[color:var(--brand-primary)]">
                  邮箱：wuhs7806@gmail.com
                </span>
                <span className="rounded-full border border-[color:var(--border-muted)] bg-[color:var(--surface-2)] px-3 py-1 transition-all hover:border-[color:var(--brand-primary)]">
                  城市：中国 · 远程协作
                </span>
              </div>
            </div>
            <div className="rounded-3xl border border-[color:var(--border-muted)] bg-gradient-to-br from-slate-900 via-slate-950 to-black p-6 transition-all hover-lift">
              <div className="h-48 rounded-2xl border border-[color:var(--border-muted)] bg-[radial-gradient(circle_at_top,_rgba(129,140,248,0.35),_rgba(15,23,42,0.9))]" />
              <p className="mt-4 text-xs text-subtle">
                照片展示位（禁止右键/拖拽保存，后续实现）
              </p>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
