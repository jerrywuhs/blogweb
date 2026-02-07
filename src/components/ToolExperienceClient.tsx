"use client";

import { useState } from "react";

interface ToolExperienceClientProps {
  defaultPrompt: string;
}

export default function ToolExperienceClient({ defaultPrompt }: ToolExperienceClientProps) {
  const [status, setStatus] = useState<"idle" | "running" | "error" | "success">(
    "idle"
  );
  const [input, setInput] = useState(defaultPrompt);
  const [error, setError] = useState("");

  const run = () => {
    if (!input.trim()) {
      setError("请输入内容后再提交。");
      setStatus("error");
      return;
    }
    setError("");
    setStatus("running");
    setTimeout(() => {
      setStatus("success");
    }, 800);
  };

  const retry = () => {
    setError("");
    setStatus("idle");
  };

  return (
    <div className="space-y-6">
      <div className="rounded-3xl border border-[color:var(--border-muted)] bg-[color:var(--surface-1)] p-6">
        <h2 className="text-lg font-semibold">参数区</h2>
        <div className="mt-4 grid gap-3 text-sm text-muted">
          <label className="flex items-center justify-between rounded-2xl border border-[color:var(--border-muted)] bg-black/40 px-4 py-3">
            风险敏感度
            <span className="text-xs text-subtle">中等</span>
          </label>
          <label className="flex items-center justify-between rounded-2xl border border-[color:var(--border-muted)] bg-black/40 px-4 py-3">
            输出格式
            <span className="text-xs text-subtle">结构化摘要</span>
          </label>
        </div>
      </div>

      <div className="rounded-3xl border border-[color:var(--border-muted)] bg-[color:var(--surface-1)] p-6">
        <h2 className="text-lg font-semibold">输入区</h2>
        <textarea
          value={input}
          onChange={(event) => setInput(event.target.value)}
          className="mt-4 min-h-[140px] w-full rounded-2xl border border-[color:var(--border-muted)] bg-black/40 px-4 py-3 text-sm text-white"
        />
        <button
          onClick={run}
          className="mt-4 rounded-full bg-emerald-400 px-4 py-2 text-sm font-semibold text-slate-900"
        >
          开始分析
        </button>
      </div>

      <div className="rounded-3xl border border-[color:var(--border-muted)] bg-[color:var(--surface-1)] p-6">
        <h2 className="text-lg font-semibold">调用状态</h2>
        <p className="mt-3 text-sm text-muted">
          {status === "idle" && "等待提交"}
          {status === "running" && "运行中..."}
          {status === "success" && "完成"}
          {status === "error" && "出现错误"}
        </p>
        {error && (
          <div className="mt-4 rounded-2xl border border-rose-400/30 bg-rose-500/10 px-4 py-3 text-sm text-rose-200">
            {error}
            <button
              onClick={retry}
              className="ml-3 text-xs text-rose-100 underline"
            >
              重试
            </button>
          </div>
        )}
      </div>

      <div className="rounded-3xl border border-[color:var(--border-muted)] bg-[color:var(--surface-1)] p-6">
        <h2 className="text-lg font-semibold">结果展示</h2>
        <div className="mt-4 space-y-3 text-sm text-muted">
          <p>✅ 关键风险条款：3 条</p>
          <p>✅ 需补充信息：2 条</p>
          <p>✅ 建议行动：1 条</p>
        </div>
        <div className="mt-4 rounded-2xl border border-[color:var(--border-muted)] bg-black/40 p-4 text-xs text-emerald-200">
          输出示例：条款 3 与条款 5 存在潜在责任扩张，请补充附件说明。
        </div>
      </div>

      <div className="rounded-3xl border border-[color:var(--border-muted)] bg-[color:var(--surface-1)] p-6">
        <h2 className="text-lg font-semibold">FAQ</h2>
        <ul className="mt-4 space-y-3 text-sm text-muted">
          <li>Q1：支持哪些文件格式？A：PDF / DOCX / TXT。</li>
          <li>Q2：是否保存数据？A：默认不保存，建议脱敏后测试。</li>
          <li>Q3：如何对接 API？A：可联系获取 SDK 与示例。</li>
        </ul>
      </div>
    </div>
  );
}
