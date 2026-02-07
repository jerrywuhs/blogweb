import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="mt-16 border-t border-[color:var(--border-muted)] bg-black/30">
      <div className="mx-auto flex w-full max-w-6xl flex-wrap items-center justify-between gap-4 px-6 py-8 text-sm text-muted">
        <p>© {new Date().getFullYear()} 老吴的工作站</p>
        <div className="flex flex-wrap items-center gap-4">
          <Link href="/about" className="hover:text-white">关于</Link>
          <Link href="/guestbook" className="hover:text-white">留言板</Link>
          <Link href="/privacy" className="hover:text-white">隐私政策</Link>
        </div>
      </div>
    </footer>
  );
}
