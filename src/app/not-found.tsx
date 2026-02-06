import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <div className="mx-auto flex min-h-screen w-full max-w-4xl flex-col items-center justify-center px-6 text-center">
        <p className="text-xs uppercase tracking-[0.3em] text-white/50">404</p>
        <h1 className="mt-4 text-3xl font-semibold">页面不存在</h1>
        <p className="mt-3 text-sm text-white/70">
          你访问的页面可能已被移动或删除。
        </p>
        <Link
          href="/"
          className="mt-6 rounded-full border border-white/20 px-6 py-3 text-sm text-white/80"
        >
          返回首页
        </Link>
      </div>
    </div>
  );
}
