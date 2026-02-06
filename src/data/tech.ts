export const techSeries = [
  {
    id: "freqtrade-0-1",
    title: "FreqTrade 从 0 到 1",
    summary: "从工具选择、策略框架到实盘风控的完整路线。",
    total: 10,
    updatedAt: "2026-02-06",
  },
  {
    id: "ai-product-loop",
    title: "AI 工具最小闭环",
    summary: "如何快速把 AI 工具从想法变成可演示产品。",
    total: 6,
    updatedAt: "2026-02-01",
  },
];

export const techPosts = [
  {
    slug: "freqtrade-0-1-ep1",
    title: "FreqTrade 从 0 到 1：第一集 · 认识系统架构",
    summary: "定位、核心模块与策略生命周期，搭建你的第一个量化框架。",
    date: "2026-02-06",
    type: "article",
    category: "AI 编程",
    tags: ["FreqTrade", "量化", "教程"],
    seriesId: "freqtrade-0-1",
    seriesTitle: "FreqTrade 从 0 到 1",
    episode: 1,
  },
  {
    slug: "freqtrade-0-1-ep2",
    title: "FreqTrade 从 0 到 1：第二集 · 回测框架与指标体系",
    summary: "如何设计指标、构建回测流程与结果评估。",
    date: "2026-02-05",
    type: "article",
    category: "量化策略",
    tags: ["回测", "指标", "策略"],
    seriesId: "freqtrade-0-1",
    seriesTitle: "FreqTrade 从 0 到 1",
    episode: 2,
  },
  {
    slug: "ai-tool-loop",
    title: "AI 工具最小闭环：从需求到上线",
    summary: "把产品功能拆成可交付的三层闭环。",
    date: "2026-02-03",
    type: "mixed",
    category: "产品方法",
    tags: ["AI 工具", "产品", "增长"],
    seriesId: "ai-product-loop",
    seriesTitle: "AI 工具最小闭环",
    episode: 1,
  },
];

export function getTechPost(slug: string) {
  return techPosts.find((post) => post.slug === slug);
}

export function getTechSeries(id: string) {
  return techSeries.find((series) => series.id === id);
}
