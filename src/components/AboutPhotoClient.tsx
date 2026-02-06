"use client";

export default function AboutPhotoClient() {
  return (
    <div
      onContextMenu={(event) => event.preventDefault()}
      onDragStart={(event) => event.preventDefault()}
      className="group relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900 via-slate-950 to-black p-6"
    >
      <div className="relative h-52 rounded-2xl border border-white/10 bg-[radial-gradient(circle_at_top,_rgba(129,140,248,0.35),_rgba(15,23,42,0.9))]" />
      <div className="pointer-events-none absolute inset-0 opacity-0 transition group-hover:opacity-100">
        <div className="absolute inset-0 bg-gradient-to-tr from-emerald-400/10 via-sky-400/10 to-indigo-400/10" />
      </div>
      <p className="mt-4 text-xs text-white/50">
        照片展示位（禁用右键/拖拽保存）
      </p>
    </div>
  );
}
