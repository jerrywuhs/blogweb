"use client";

import Link from "next/link";

export default function ProductPromotion() {
  return (
    <section className="mt-16">
      <div className="relative overflow-hidden rounded-3xl border border-[color:var(--border-muted)] bg-gradient-to-br from-indigo-900/30 via-[color:var(--surface-1)] to-emerald-900/30 p-8">
        {/* Animated background glow */}
        <div className="absolute -top-24 -right-24 h-48 w-48 rounded-full bg-gradient-to-br from-emerald-400/20 to-indigo-500/20 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 h-48 w-48 rounded-full bg-gradient-to-br from-indigo-400/20 to-emerald-500/20 blur-3xl" />
        
        <div className="relative z-10 grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-[color:var(--brand-primary)] bg-[color:var(--brand-primary)]/10 px-3 py-1 text-xs font-medium text-[color:var(--brand-primary)]">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[color:var(--brand-primary)] opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[color:var(--brand-primary)]"></span>
              </span>
              新品上线
            </div>
            
            <h2 className="text-3xl font-semibold">
              <span className="gradient-text">AI 提示词工程实战</span>
              <br />
              让你的工作效率提升 10 倍
            </h2>
            
            <p className="text-lg text-muted">
              100 个职场必备提示词模板 + 5 节视频教程，涵盖邮件、报告、沟通、文案、数据分析五大场景。
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Link
                href="https://afdian.com/a/jerry617"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative overflow-hidden rounded-full bg-gradient-to-r from-[color:var(--brand-primary)] to-[color:var(--brand-accent)] px-6 py-3 font-semibold text-black transition-all hover:shadow-[0_0_30px_rgba(94,234,212,0.4)]"
              >
                <span className="relative z-10">立即订阅 ¥29/月</span>
                <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-white/20 to-transparent transition-transform duration-300 group-hover:translate-x-0" />
              </Link>
              
              <Link
                href="#features"
                className="rounded-full border border-[color:var(--border-muted)] px-6 py-3 font-semibold text-muted transition-all hover:border-[color:var(--brand-primary)] hover:text-[color:var(--brand-primary)]"
              >
                了解更多 →
              </Link>
            </div>
            
            <div className="flex items-center gap-6 text-sm text-subtle">
              <div className="flex items-center gap-2">
                <svg className="h-5 w-5 text-[color:var(--brand-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>100+ 实用模板</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="h-5 w-5 text-[color:var(--brand-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>5 节视频课程</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="h-5 w-5 text-[color:var(--brand-primary)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>持续更新</span>
              </div>
            </div>
          </div>
          
          <div className="relative hidden lg:block">
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[color:var(--brand-primary)]/10 to-[color:var(--brand-accent)]/10" />
            <div className="relative flex h-full flex-col items-center justify-center rounded-2xl border border-[color:var(--border-muted)] bg-[color:var(--surface-2)] p-6">
              <div className="text-center">
                <p className="text-sm text-subtle">限时优惠</p>
                <div className="mt-2 text-5xl font-bold">
                  <span className="text-[color:var(--brand-primary)]">¥29</span>
                  <span className="text-lg text-subtle">/月</span>
                </div>
                <p className="mt-2 text-sm text-subtle line-through">原价 ¥99/月</p>
                
                <div className="mt-6 space-y-3 text-left">
                  <div className="flex items-center gap-2 text-sm">
                    <span className="rounded-full bg-[color:var(--brand-primary)]/20 px-2 py-0.5 text-[color:var(--brand-primary)]">✓</span>
                    <span>100个职场模板</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <span className="rounded-full bg-[color:var(--brand-primary)]/20 px-2 py-0.5 text-[color:var(--brand-primary)]">✓</span>
                    <span>5节视频教程</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <span className="rounded-full bg-[color:var(--brand-primary)]/20 px-2 py-0.5 text-[color:var(--brand-primary)]">✓</span>
                    <span>社群答疑支持</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <span className="rounded-full bg-[color:var(--brand-primary)]/20 px-2 py-0.5 text-[color:var(--brand-primary)]">✓</span>
                    <span>每月更新10+模板</span>
                  </div>
                </div>
                
                <Link
                  href="https://afdian.com/a/jerry617"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 block w-full rounded-full bg-gradient-to-r from-[color:var(--brand-primary)] to-[color:var(--brand-accent)] py-3 text-center font-semibold text-black transition-all hover:shadow-[0_0_20px_rgba(94,234,212,0.3)]"
                >
                  立即订阅
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
