export const personalSeries = [
  {
    id: "work-reflection",
    title: "工作复盘与系统性成长",
    summary: "聚焦方法论、决策复盘与长期成长路径。",
    total: 5,
    updatedAt: "2026-02-06",
  },
  {
    id: "life-notes",
    title: "生活记录与观察",
    summary: "记录生活中的重要片段与思考。",
    total: 8,
    updatedAt: "2026-02-02",
  },
];

export const personalPosts = [
  {
    slug: "workflow-reset-2025",
    title: "复盘 2025：个人工作流的再设计",
    summary: "把一年中的高频问题拆解成可执行的流程。",
    date: "2026-02-06",
    type: "article",
    category: "工作心得",
    tags: ["复盘", "工作流", "效率"],
    seriesId: "work-reflection",
    seriesTitle: "工作复盘与系统性成长",
    episode: 1,
  },
  {
    slug: "growth-bottleneck",
    title: "内容型产品的增长瓶颈与突破",
    summary: "从流量、转化、复购三个维度分析核心瓶颈。",
    date: "2026-02-04",
    type: "article",
    category: "总结",
    tags: ["增长", "内容", "产品"],
    seriesId: "work-reflection",
    seriesTitle: "工作复盘与系统性成长",
    episode: 2,
  },
  {
    slug: "life-slow-notes",
    title: "慢下来：生活记录与能量恢复",
    summary: "从节奏与空间角度，重新理解休息的意义。",
    date: "2026-02-02",
    type: "mixed",
    category: "生活记录",
    tags: ["生活", "心态", "记录"],
    seriesId: "life-notes",
    seriesTitle: "生活记录与观察",
    episode: 1,
  },
];

export function getPersonalPost(slug: string) {
  return personalPosts.find((post) => post.slug === slug);
}

export function getPersonalSeries(id: string) {
  return personalSeries.find((series) => series.id === id);
}
