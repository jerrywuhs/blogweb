export const tools = [
  {
    id: "contract-analyzer",
    name: "AI 合同分析",
    summary: "上传合同，生成风险点摘要与建议。",
    category: "文档",
    tags: ["合同", "法务", "AI"],
    apiType: "REST",
  },
  {
    id: "sentiment-radar",
    name: "舆情速览",
    summary: "多源信息聚合、热点趋势与关键摘要。",
    category: "信息流",
    tags: ["舆情", "趋势", "摘要"],
    apiType: "WebSocket",
  },
  {
    id: "content-struct",
    name: "内容结构化助手",
    summary: "将长文拆解为卡片/大纲/行动清单。",
    category: "内容",
    tags: ["结构化", "清单", "效率"],
    apiType: "SSE",
  },
];

export function getTool(id: string) {
  return tools.find((tool) => tool.id === id);
}
