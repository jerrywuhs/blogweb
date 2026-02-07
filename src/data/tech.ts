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
{
  slug: "ai-code-review-checklist",
  title: "AI 编程工具实战：代码审查清单模板",
  summary: "把 AI 输出的代码纳入审查体系：从结构、性能到安全的实战清单。",
  date: "2026-02-07",
  type: "article",
  category: "AI 编程工具实战",
  tags: ["AI", "代码审查", "质量", "规范"],
},

{
  slug: "ai-tools-context-management",
  title: "AI 编程工具实战：上下文管理是生产力关键",
  summary: "把需求、约束、历史决策压缩成可复用上下文，避免反复解释。",
  date: "2026-02-07",
  type: "article",
  category: "AI 编程工具实战",
  tags: ["AI", "上下文", "效率"],
},

{
  slug: "ai-tools-eval-metrics",
  title: "AI 编程工具实战：效果评估的 5 个指标",
  summary: "评估 AI 工具效果不能只看速度，正确率、返工率与稳定性更关键。",
  date: "2026-02-07",
  type: "article",
  category: "AI 编程工具实战",
  tags: ["AI", "评估", "指标"],
},

{
  slug: "ai-tools-fast-prototype",
  title: "AI 编程工具实战：48 小时快速原型方法",
  summary: "从需求到可演示 Demo 的 48 小时路线图：拆解、建模、验证。",
  date: "2026-02-07",
  type: "article",
  category: "AI 编程工具实战",
  tags: ["AI", "原型", "MVP"],
},

{
  slug: "ai-tools-prompt-ops",
  title: "AI 编程工具实战：提示词运营（Prompt Ops）入门",
  summary: "提示词不是一次性输入，而是可以版本化、可复用的运营资产。",
  date: "2026-02-07",
  type: "article",
  category: "AI 编程工具实战",
  tags: ["AI", "Prompt", "工程化", "效率"],
},

{
  slug: "ai-tools-quality-gates",
  title: "AI 编程工具实战：质量门禁四步法",
  summary: "让 AI 输出可上线：Lint、Build、截图、回归四步法。",
  date: "2026-02-07",
  type: "article",
  category: "AI 编程工具实战",
  tags: ["AI", "质量", "测试"],
},

{
  slug: "ai-tools-setup-local-workflow",
  title: "AI 编程工具实战：本地开发流从 0 到 1",
  summary: "从环境准备、提示词规范到代码评审，搭建一套可复用的 AI 编程本地工作流。",
  date: "2026-02-07",
  type: "article",
  category: "AI 编程工具实战",
  tags: ["AI", "开发工具", "工作流", "效率"],
},

{
  slug: "openclaw-agent-workflow",
  title: "OpenClaw 使用指南：多任务协作工作流",
  summary: "通过子任务/子会话拆分复杂工作，实现并行效率。",
  date: "2026-02-07",
  type: "article",
  category: "OpenClaw 使用指南",
  tags: ["OpenClaw", "多任务", "工作流"],
},

{
  slug: "openclaw-automation-recipes",
  title: "OpenClaw 使用指南：自动化任务配方",
  summary: "常见任务配方：内容发布、页面测试、部署检查。",
  date: "2026-02-07",
  type: "article",
  category: "OpenClaw 使用指南",
  tags: ["OpenClaw", "自动化", "脚本"],
},

{
  slug: "openclaw-deploy-checklist",
  title: "OpenClaw 使用指南：部署与验收检查清单",
  summary: "部署前后必须验证的 8 个检查项，避免上线翻车。",
  date: "2026-02-07",
  type: "article",
  category: "OpenClaw 使用指南",
  tags: ["OpenClaw", "部署", "检查清单"],
},

{
  slug: "openclaw-docs-reading-map",
  title: "OpenClaw 使用指南：文档阅读路线图",
  summary: "如何高效阅读 OpenClaw 文档：先流程、后工具、最后扩展。",
  date: "2026-02-07",
  type: "article",
  category: "OpenClaw 使用指南",
  tags: ["OpenClaw", "文档", "入门"],
},

{
  slug: "openclaw-getting-started",
  title: "OpenClaw 使用指南：从 0 到可用的自动化流程",
  summary: "基于 OpenClaw 的基本流程：读文档、执行任务、验证结果与持续迭代。",
  date: "2026-02-07",
  type: "article",
  category: "OpenClaw 使用指南",
  tags: ["OpenClaw", "自动化", "工作流"],
},

{
  slug: "quant-intro-backtest-basics",
  title: "量化策略入门：回测的 3 个关键误区",
  summary: "新手回测最常见的 3 个错误：过拟合、数据泄露与交易成本忽视。",
  date: "2026-02-07",
  type: "article",
  category: "量化策略入门",
  tags: ["量化", "回测", "入门"],
},

{
  slug: "quant-intro-position-sizing",
  title: "量化策略入门：仓位管理的最小公式",
  summary: "仓位管理决定策略寿命：固定比例、波动率调仓与极端保护。",
  date: "2026-02-07",
  type: "article",
  category: "量化策略入门",
  tags: ["量化", "仓位", "风控"],
},

{
  slug: "quant-intro-risk-framework",
  title: "量化策略入门：先做风控，再谈收益",
  summary: "新手量化最容易犯的错是忽视风险。本文用最小框架带你建立风控意识。",
  date: "2026-02-07",
  type: "article",
  category: "量化策略入门",
  tags: ["量化", "风控", "入门", "策略"],
},

{
  slug: "quant-intro-signal-validation",
  title: "量化策略入门：信号验证的三重过滤",
  summary: "从噪声中筛选有效信号：样本外、滑点、极端行情三重验证。",
  date: "2026-02-07",
  type: "article",
  category: "量化策略入门",
  tags: ["量化", "信号", "验证"],
},

{
  slug: "quant-intro-strategy-types",
  title: "量化策略入门：三类策略的优缺点",
  summary: "趋势、均值回归、套利：三类策略的适用场景与风险点。",
  date: "2026-02-07",
  type: "article",
  category: "量化策略入门",
  tags: ["量化", "策略", "入门"],
},
];

export function getTechPost(slug: string) {
  return techPosts.find((post) => post.slug === slug);
}

export function getTechSeries(id: string) {
  return techSeries.find((series) => series.id === id);
}
