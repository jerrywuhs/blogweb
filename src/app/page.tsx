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
    href: "/tools/contract-analysis",
  },
  {
    name: "舆情速览",
    desc: "多源信息聚合、热点趋势与关键摘要。",
    type: "WebSocket",
    href: "/tools/public-sentiment",
  },
  {
    name: "内容结构化助手",
    desc: "将长文快速拆解成卡片/大纲/行动清单。",
    type: "SSE",
    href: "/tools/content-structure",
  },
];

const stats = [
  { label: "文章", value: "138+" },
  { label: "AI模板", value: "100+" },
  { label: "系列课程", value: "9" },
  { label: "更新频率", value: "每周" },
];

const tags = [
  { name: "AI 编程", href: "/tags/ai-编程" },
  { name: "量化策略", href: "/tags/量化策略" },
  { name: "提示词工程", href: "/tags/提示词工程" },
  { name: "工具评测", href: "/tags/工具评测" },
  { name: "工作复盘", href: "/tags/工作复盘" },
  { name: "内容运营", href: "/tags/内容运营" },
];

const personalPosts = [
  { title: "复盘：内容型产品的增长瓶颈与突破", readTime: "6 min", href: "/personal/growth-breakthrough" },
  { title: "AI 时代的个人工作流重新设计", readTime: "6 min", href: "/personal/ai-workflow" },
  { title: "一年一次的系统性目标复盘", readTime: "6 min", href: "/personal/annual-review" },
];

export default async function Home() {
  const featuredPosts = await getFeaturedPosts();

  return (
    <div className="min-h-screen text-white">
      <SiteHeader active="/" />

      <main id="home" className="mx-auto w-full max-w-6xl px-6 pb-24 pt-14">
        {/* Hero Section */}
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

        {/* Popular Tags - Replaced Ad Slot */}
        <section className="mt-12 rounded-3xl border border-[color:var(--border-muted)] bg-[color:var(--surface-1)] p-6">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold">热门标签</h3>
            <Link href="/tags" className="text-sm text-subtle hover:text-white transition">
              查看全部 →
            </Link>
          </div>
          <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {tags.map((tag) => (
              <Link
                key={tag.name}
                href={tag.href}
                className="rounded-xl border border-[color:var(--border-muted)] bg-[color:var(--surface-2)] px-4 py-3 text-sm text-muted text-center transition-all hover:border-[color:var(--brand-primary)] hover:text-[color:var(--brand-primary)] hover:scale-105"
              >
                #{tag.name}
              </Link>
            ))}
          </div>
        </section>

        {/* Featured Posts */}
        <section id="tech" className="mt-16">
          <div className="flex items-center justify-between">
            <h3 className="text-2xl font-semibold">推荐内容</h3>
            <div className="flex gap-4 text-sm">
              <Link href="/tech" className="text-subtle hover:text-white transition">
                技术博客
              </Link>
              <Link href="/tech/series" className="text-subtle hover:text-white transition">
                系列课程
              </Link>
            </div>
          </div>
          <div className="mt-6 grid gap-6 lg:grid-cols-3">
            {featuredPosts.map((post, index) => (
              <article
                key={post.title}
                className="card-hover group rounded-3xl border border-[color:var(--border-muted)] bg-[color:var(--surface-1)] p-6"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <span className="text-xs uppercase tracking-[0.3em] text-subtle">
                  {post.tag}
                </span>
                <h4 className="card-title mt-4 text-lg font-semibold transition-colors">{post.title}</h4>
                <p className="mt-3 text-sm text-muted line-clamp-2">{post.summary}</p>
                <Link
                  href={post.href}
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-emerald-300 group-hover:gap-3 transition-all"
                >
                  阅读详情 →
                </Link>
              </article>
            ))}
          </div>
        </section>

        {/* AI Tools */}
        <section id="tools" className="mt-16">
          <div className="flex items-center justify-between">
            <h3 className="text-2xl font-semibold">AI 工具</h3>
            <Link href="/tools" className="text-sm text-subtle hover:text-white transition">
              查看全部 →
            </Link>
          </div>
          <div className="mt-6 grid gap-6 lg:grid-cols-3">
            {tools.map((tool, index) => (
              <Link
                key={tool.name}
                href={tool.href}
                className="card-hover group rounded-3xl border border-[color:var(--border-muted)] bg-[color:var(--surface-1)] p-6"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center justify-between">
                  <h4 className="card-title text-lg font-semibold transition-colors">{tool.name}</h4>
                  <span className="rounded-full border border-[color:var(--border-muted)] px-3 py-1 text-xs text-subtle">
                    {tool.type}
                  </span>
                </div>
                <p className="mt-3 text-sm text-muted line-clamp-2">{tool.desc}</p>
                <div className="mt-6 flex items-center gap-2">
                  <span className="rounded-full bg-emerald-500/10 px-3 py-1.5 text-xs text-emerald-300">
                    在线体验
                  </span>
                  <span className="rounded-full bg-white/10 px-3 py-1.5 text-xs">
                    API 接入
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Personal Blog + About */}
        <section id="life" className="mt-16 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-3xl border border-[color:var(--border-muted)] bg-[color:var(--surface-1)] p-6 transition-all hover-lift">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-semibold">个人博客</h3>
              <Link href="/personal" className="text-sm text-subtle hover:text-white transition">
                查看全部 →
              </Link>
            </div>
            <p className="mt-3 text-sm text-muted">
              分享决策复盘、工作方法论与长期思考，用结构化方式沉淀经验。
            </p>
            <div className="mt-6 space-y-4">
              {personalPosts.map((post) => (
                <Link
                  key={post.title}
                  href={post.href}
                  className="flex items-center justify-between rounded-2xl border border-[color:var(--border-muted)] bg-[color:var(--surface-2)] px-4 py-3 transition-all hover:border-[color:var(--brand-primary)]"
                >
                  <span className="text-sm text-muted transition-all hover:text-white">{post.title}</span>
                  <span className="text-xs text-subtle">{post.readTime}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* About Section - Replaced Ad Slot B */}
          <div className="rounded-3xl border border-[color:var(--border-muted)] bg-gradient-to-br from-slate-900 via-slate-950 to-black p-6 transition-all hover-lift">
            <h3 className="text-xl font-semibold">关于我</h3>
            <p className="mt-3 text-sm text-muted">
              如果你对 AI 工具、内容合作、项目共建有想法，欢迎联系。
            </p>
            <div className="mt-6 space-y-3">
              <div className="flex items-center gap-3 text-sm text-muted">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[color:var(--surface-2)]">
                  📧
                </span>
                <a href="mailto:wuhs7806@gmail.com" className="hover:text-white transition">
                  wuhs7806@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3 text-sm text-muted">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[color:var(--surface-2)]">
                  📍
                </span>
                <span>中国 · 远程协作</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-muted">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[color:var(--surface-2)]">
                  🔗
                </span>
                <a href="https://github.com/jerrywuhs" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">
                  GitHub
                </a>
              </div>
            </div>
            <div className="mt-6">
              <Link
                href="/about"
                className="inline-flex rounded-full border border-[color:var(--border-muted)] px-4 py-2 text-sm text-muted transition hover:border-[color:var(--brand-primary)] hover:text-[color:var(--brand-primary)]"
              >
                了解更多 →
              </Link>
            </div>
          </div>
        </section>

        {/* Newsletter / Contact */}
        <section id="contact" className="mt-16 rounded-3xl border border-[color:var(--border-muted)] bg-gradient-to-r from-emerald-500/5 via-slate-900 to-indigo-500/5 p-8">
          <div className="grid gap-6 lg:grid-cols-2 lg:items-center">
            <div>
              <h3 className="text-2xl font-semibold">保持联系</h3>
              <p className="mt-3 text-sm text-muted">
                订阅更新，获取最新文章和工具动态。也可以通过邮箱直接联系我。
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <input
                type="email"
                placeholder="输入你的邮箱"
                className="flex-1 rounded-full border border-[color:var(--border-muted)] bg-[color:var(--surface-1)] px-4 py-3 text-sm text-white placeholder:text-muted focus:border-[color:var(--brand-primary)] focus:outline-none"
              />
              <Link
                href="/guestbook"
                className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-gray-100"
              >
                订阅
              </Link>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
