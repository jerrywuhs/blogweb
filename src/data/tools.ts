export const tools = [
  {
    id: "contract-analyzer",
    name: "AI 合同分析",
    summary: "上传合同，生成风险点摘要与建议。",
    category: "文档",
    tags: ["合同", "法务", "AI"],
    apiType: "REST",
    pricingType: "free",
    price: 0,
    billingUnit: "次",
    quotaLimit: "每日 50 次",
    api: {
      type: "rest",
      endpoint: "https://api.example.com/contract/analyze",
    },
  },
  {
    id: "sentiment-radar",
    name: "舆情速览",
    summary: "多源信息聚合、热点趋势与关键摘要。",
    category: "信息流",
    tags: ["舆情", "趋势", "摘要"],
    apiType: "WebSocket",
    pricingType: "free",
    price: 0,
    billingUnit: "次",
    quotaLimit: "每分钟 30 次",
    api: {
      type: "ws",
      endpoint: "wss://api.example.com/sentiment/stream",
    },
  },
  {
    id: "content-struct",
    name: "内容结构化助手",
    summary: "将长文拆解为卡片/大纲/行动清单。",
    category: "内容",
    tags: ["结构化", "清单", "效率"],
    apiType: "SSE",
    pricingType: "paid",
    price: 9.9,
    billingUnit: "月",
    quotaLimit: "每月 200 次",
    api: {
      type: "sse",
      endpoint: "https://api.example.com/content/stream",
    },
  },
];

export function getTool(id: string) {
  return tools.find((tool) => tool.id === id);
}
