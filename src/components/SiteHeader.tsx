import Link from "next/link";

const navItems = [
  { label: "首页", href: "/" },
  { label: "技术博客", href: "/tech" },
  { label: "个人博客", href: "/personal" },
  { label: "AI 工具", href: "/tools" },
  { label: "关于/联系", href: "/about" },
  { label: "留言板", href: "/guestbook" },
];

export default function SiteHeader({ active }: { active?: string }) {
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-black/30 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-5">
        <Link href="/" className="group flex items-center gap-3">
          <span className="h-9 w-9 rounded-2xl bg-gradient-to-br from-sky-400 via-indigo-400 to-emerald-300 shadow-[0_0_24px_rgba(56,189,248,0.35)]" />
          <span className="text-lg font-semibold tracking-wide text-white">
            老吴的工作站
          </span>
        </Link>
        <nav className="hidden items-center gap-6 text-sm text-white/70 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`transition hover:text-white ${
                active === item.href ? "text-white" : ""
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <Link
          href="/guestbook"
          className="rounded-full border border-white/20 px-4 py-2 text-sm text-white/80 transition hover:border-white/60"
        >
          订阅更新
        </Link>
      </div>
    </header>
  );
}
