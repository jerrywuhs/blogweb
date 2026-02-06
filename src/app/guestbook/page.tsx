"use client";

import Link from "next/link";
import { useState } from "react";

export default function GuestbookPage() {
  const [content, setContent] = useState("");
  const [contact, setContact] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const sanitize = (text: string) =>
    text
      .replace(/<[^>]*>/g, "")
      .replace(/(script|iframe|onerror|onload)/gi, "")
      .trim();

  const handleSubmit = () => {
    const cleaned = sanitize(content);
    if (!cleaned) {
      setError("需求与建议为必填，请填写内容。");
      setSuccess(false);
      return;
    }
    if (cleaned.length < 5) {
      setError("内容过短，请补充更多细节。");
      setSuccess(false);
      return;
    }
    setError("");
    setSuccess(true);
    setContent("");
    setContact("");
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <header className="border-b border-white/10 bg-slate-950/80 backdrop-blur">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-5">
          <Link href="/" className="text-lg font-semibold">
            老吴的工作站
          </Link>
          <nav className="flex items-center gap-6 text-sm text-white/70">
            <Link href="/tech">技术博客</Link>
            <Link href="/personal">个人博客</Link>
            <Link href="/tools">AI 工具</Link>
            <Link href="/about">关于/联系</Link>
          </nav>
        </div>
      </header>

      <main className="mx-auto w-full max-w-4xl px-6 py-12">
        <section className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <h1 className="text-2xl font-semibold">留言板</h1>
          <p className="mt-2 text-sm text-white/70">
            欢迎提交需求与建议。联系方式可选，我们会在 48 小时内跟进。
          </p>

          <div className="mt-6 space-y-4">
            <div>
              <label className="text-sm text-white/70">需求与建议 *</label>
              <textarea
                value={content}
                onChange={(event) => setContent(event.target.value)}
                className="mt-2 min-h-[160px] w-full rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white"
              />
            </div>
            <div>
              <label className="text-sm text-white/70">联系方式（可选）</label>
              <input
                value={contact}
                onChange={(event) => setContact(event.target.value)}
                placeholder="手机号 / 邮箱"
                className="mt-2 w-full rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white placeholder:text-white/40"
              />
            </div>
          </div>

          {error && (
            <div className="mt-4 rounded-2xl border border-rose-400/30 bg-rose-500/10 px-4 py-3 text-sm text-rose-200">
              {error}
            </div>
          )}
          {success && (
            <div className="mt-4 rounded-2xl border border-emerald-400/30 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-200">
              已收到你的反馈，感谢支持！
            </div>
          )}

          <button
            onClick={handleSubmit}
            className="mt-6 rounded-full bg-emerald-400 px-5 py-2 text-sm font-semibold text-slate-900"
          >
            提交留言
          </button>

          <p className="mt-4 text-xs text-white/50">
            为保障安全，输入会进行基础清洗与敏感内容过滤。
          </p>
        </section>
      </main>
    </div>
  );
}
