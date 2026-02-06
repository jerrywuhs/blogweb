'use client';

import { useEffect, useState } from 'react';

const items = [
  'AI 工具 · 合同分析 v0.9 已上线',
  '技术博客 · FreqTrade 0-1 系列更新第 3 章',
  '个人随笔 · 复盘 2025 的三个重要决定',
  '工具接口 · REST/WS/SSE 统一代理层规划完成',
  '新工具预告 · 智能简历优化器（内测）',
];

export default function RealtimeTicker() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % items.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative overflow-hidden rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80 backdrop-blur">
      <div className="absolute left-3 top-1/2 h-2 w-2 -translate-y-1/2 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.9)]" />
      <div className="pl-5 transition-all duration-500 ease-out">{items[index]}</div>
    </div>
  );
}
