"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import AdSlot from "@/components/AdSlot";
import { tools } from "@/data/tools";

const categories = Array.from(new Set(tools.map((tool) => tool.category)));
const tags = Array.from(new Set(tools.flatMap((tool) => tool.tags)));
const pricing = ["free", "paid"];

export default function ToolsListClient() {
  const [category, setCategory] = useState("全部");
  const [tag, setTag] = useState("全部");
  const [price, setPrice] = useState("全部");
  const [keyword, setKeyword] = useState("");

  const filtered = useMemo(() => {
    const lower = keyword.trim().toLowerCase();
    return tools.filter((tool) => {
      if (category !== "全部" && tool.category !== category) return false;
      if (tag !== "全部" && !tool.tags.includes(tag)) return false;
      if (price !== "全部" && tool.pricingType !== price) return false;
      if (
        lower &&
        ![tool.name, tool.summary, tool.category, tool.tags.join(" ")]
          .join(" ")
          .toLowerCase()
          .includes(lower)
      )
        return false;
      return true;
    });
  }, [category, tag, price, keyword]);

  return (
    <div className="space-y-8">
      <div className="rounded-3xl border border-[color:var(--border-muted)] bg-[color:var(--surface-1)] p-6">
        <h2 className="sr-only">工具列表</h2>
        <div className="grid gap-4 lg:grid-cols-[1fr_auto_auto_auto]">
          <label className="sr-only" htmlFor="tools-keyword">
            搜索工具
          </label>
          <input
            id="tools-keyword"
            value={keyword}
            onChange={(event) => setKeyword(event.target.value)}
            placeholder="搜索工具"
            className="rounded-2xl border border-[color:var(--border-muted)] bg-black/40 px-4 py-3 text-sm text-white placeholder:text-white/40"
          />
          <label className="sr-only" htmlFor="tools-category">
            按分类筛选
          </label>
          <select
            id="tools-category"
            aria-label="按分类筛选"
            className="rounded-full border border-white/20 bg-transparent px-3 py-2 text-sm"
            value={category}
            onChange={(event) => setCategory(event.target.value)}
          >
            <option>全部</option>
            {categories.map((item) => (
              <option key={item}>{item}</option>
            ))}
          </select>
          <label className="sr-only" htmlFor="tools-tag">
            按标签筛选
          </label>
          <select
            id="tools-tag"
            aria-label="按标签筛选"
            className="rounded-full border border-white/20 bg-transparent px-3 py-2 text-sm"
            value={tag}
            onChange={(event) => setTag(event.target.value)}
          >
            <option>全部</option>
            {tags.map((item) => (
              <option key={item}>{item}</option>
            ))}
          </select>
          <label className="sr-only" htmlFor="tools-pricing">
            按收费类型筛选
          </label>
          <select
            id="tools-pricing"
            aria-label="按收费类型筛选"
            className="rounded-full border border-white/20 bg-transparent px-3 py-2 text-sm"
            value={price}
            onChange={(event) => setPrice(event.target.value)}
          >
            <option>全部</option>
            {pricing.map((item) => (
              <option key={item}>{item}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {filtered.map((tool) => (
          <article
            key={tool.id}
            className="rounded-3xl border border-[color:var(--border-muted)] bg-[color:var(--surface-1)] p-6"
          >
            <div className="flex items-start justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-subtle">
                  {tool.category}
                </p>
                <h3 className="mt-3 text-lg font-semibold">{tool.name}</h3>
              </div>
              <span className="rounded-full border border-[color:var(--border-muted)] px-3 py-1 text-xs text-subtle">
                {tool.apiType}
              </span>
            </div>
            <p className="mt-3 text-sm text-white/85">{tool.summary}</p>
            <div className="mt-4 flex flex-wrap gap-2 text-xs text-subtle">
              {tool.tags.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-[color:var(--border-muted)] bg-[color:var(--surface-2)] px-2 py-1"
                >
                  #{item}
                </span>
              ))}
            </div>
            <div className="mt-4 text-xs text-subtle">
              收费：{tool.pricingType === "free" ? "免费" : `¥${tool.price}/${tool.billingUnit}`}
            </div>
            <Link
              href={`/tools/${tool.id}`}
              className="mt-6 inline-flex text-sm font-semibold text-emerald-300"
            >
              进入工具 →
            </Link>
          </article>
        ))}
      </div>

      <AdSlot label="广告位 B（信息流插入 · 4:3）" ratio="4/3" />
    </div>
  );
}
