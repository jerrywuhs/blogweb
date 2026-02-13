"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import AdSlot from "@/components/AdSlot";
import { personalPosts, personalSeries } from "@/data/personal";

const categories = Array.from(new Set(personalPosts.map((post) => post.category)));
const tags = Array.from(new Set(personalPosts.flatMap((post) => post.tags)));
const types = Array.from(new Set(personalPosts.map((post) => post.type)));
const series = personalSeries.map((item) => item.title);

export default function PersonalListClient() {
  const [category, setCategory] = useState("全部");
  const [tag, setTag] = useState("全部");
  const [type, setType] = useState("全部");
  const [seriesTitle, setSeriesTitle] = useState("全部");
  const [sort, setSort] = useState("最新");
  const [layout, setLayout] = useState<"grid" | "list">("grid");

  const filtered = useMemo(() => {
    let data = [...personalPosts];
    if (category !== "全部") data = data.filter((post) => post.category === category);
    if (tag !== "全部") data = data.filter((post) => post.tags.includes(tag));
    if (type !== "全部") data = data.filter((post) => post.type === type);
    if (seriesTitle !== "全部")
      data = data.filter((post) => post.seriesTitle === seriesTitle);

    data.sort((a, b) =>
      sort === "最新"
        ? new Date(b.date).getTime() - new Date(a.date).getTime()
        : new Date(a.date).getTime() - new Date(b.date).getTime()
    );
    return data;
  }, [category, tag, type, seriesTitle, sort]);

  return (
    <div className="space-y-8">
      <div className="rounded-3xl border border-[color:var(--border-muted)] bg-[color:var(--surface-1)] p-6">
        <div className="flex flex-wrap items-center gap-3 text-xs text-muted">
          <label className="sr-only" htmlFor="personal-category">
            按分类筛选
          </label>
          <select
            id="personal-category"
            aria-label="按分类筛选"
            className="rounded-full border border-white/20 bg-transparent px-3 py-1"
            value={category}
            onChange={(event) => setCategory(event.target.value)}
          >
            <option>全部</option>
            {categories.map((item) => (
              <option key={item}>{item}</option>
            ))}
          </select>
          <label className="sr-only" htmlFor="personal-tag">
            按标签筛选
          </label>
          <select
            id="personal-tag"
            aria-label="按标签筛选"
            className="rounded-full border border-white/20 bg-transparent px-3 py-1"
            value={tag}
            onChange={(event) => setTag(event.target.value)}
          >
            <option>全部</option>
            {tags.map((item) => (
              <option key={item}>{item}</option>
            ))}
          </select>
          <label className="sr-only" htmlFor="personal-type">
            按类型筛选
          </label>
          <select
            id="personal-type"
            aria-label="按类型筛选"
            className="rounded-full border border-white/20 bg-transparent px-3 py-1"
            value={type}
            onChange={(event) => setType(event.target.value)}
          >
            <option>全部</option>
            {types.map((item) => (
              <option key={item}>{item}</option>
            ))}
          </select>
          <label className="sr-only" htmlFor="personal-series">
            按系列筛选
          </label>
          <select
            id="personal-series"
            aria-label="按系列筛选"
            className="rounded-full border border-white/20 bg-transparent px-3 py-1"
            value={seriesTitle}
            onChange={(event) => setSeriesTitle(event.target.value)}
          >
            <option>全部</option>
            {series.map((item) => (
              <option key={item}>{item}</option>
            ))}
          </select>
          <div className="ml-auto flex items-center gap-3">
            <button
              className={`rounded-full border px-3 py-1 ${
                sort === "最新" ? "border-white/60" : "border-white/20"
              }`}
              onClick={() => setSort("最新")}
            >
              最新
            </button>
            <button
              className={`rounded-full border px-3 py-1 ${
                sort === "最早" ? "border-white/60" : "border-white/20"
              }`}
              onClick={() => setSort("最早")}
            >
              最早
            </button>
            <button
              className={`rounded-full border px-3 py-1 ${
                layout === "grid" ? "border-white/60" : "border-white/20"
              }`}
              onClick={() => setLayout("grid")}
            >
              卡片
            </button>
            <button
              className={`rounded-full border px-3 py-1 ${
                layout === "list" ? "border-white/60" : "border-white/20"
              }`}
              onClick={() => setLayout("list")}
            >
              列表
            </button>
          </div>
        </div>
      </div>

      <div
        className={
          layout === "grid"
            ? "grid gap-6 lg:grid-cols-3"
            : "space-y-4"
        }
      >
        {filtered.map((post) => (
          <article
            key={post.slug}
            className="group relative rounded-3xl border border-[color:var(--border-muted)] bg-[color:var(--surface-1)] p-6 transition-all hover:border-[color:var(--brand-primary)] hover:shadow-lg hover:shadow-[color:var(--brand-primary)]/10 hover:-translate-y-1"
          >
            <p className="text-xs uppercase tracking-[0.3em] text-subtle">
              {post.category}
            </p>
            <h3 className="mt-3 text-lg font-semibold group-hover:text-[color:var(--brand-primary)] transition-colors">{post.title}</h3>
            <p className="mt-2 text-sm text-muted line-clamp-2">{post.summary}</p>
            <div className="mt-4 flex flex-wrap gap-2 text-xs text-subtle">
              {post.tags.slice(0, 3).map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-[color:var(--border-muted)] bg-[color:var(--surface-2)] px-2 py-1"
                >
                  #{item}
                </span>
              ))}
            </div>
            <Link
              href={`/personal/${post.slug}`}
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-emerald-300 group-hover:gap-3 transition-all"
            >
              阅读详情 →
            </Link>
            
            {/* 悬停时显示的背景光效 */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[color:var(--brand-primary)]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
          </article>
        ))}
      </div>
    </div>
  );
}
