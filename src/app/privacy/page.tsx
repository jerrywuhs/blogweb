import SiteHeader from "@/components/SiteHeader";

export const metadata = {
  title: "隐私政策 · 老吴的工作站",
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen text-white">
      <SiteHeader active="/privacy" />

      <main className="mx-auto w-full max-w-4xl px-6 py-12">
        <section className="rounded-3xl border border-[color:var(--border-muted)] bg-[color:var(--surface-1)] p-8">
          <p className="text-xs uppercase tracking-[0.3em] text-subtle">Privacy</p>
          <h1 className="mt-4 text-3xl font-semibold">隐私政策</h1>
          <p className="mt-4 text-sm text-muted">
            我们重视你的隐私。以下内容用于说明本站收集、使用与保护信息的方式。
          </p>

          <div className="mt-8 space-y-6 text-sm text-muted">
            <section>
              <h2 className="text-lg font-semibold text-white">1. 信息收集</h2>
              <p className="mt-2">
                当你浏览本站时，我们可能会收集设备信息、浏览器类型、访问页面与访问时间。
                如果你通过留言板提交信息，将收集你主动填写的内容。
              </p>
            </section>
            <section>
              <h2 className="text-lg font-semibold text-white">2. 信息使用</h2>
              <p className="mt-2">
                收集的信息用于改进内容体验、优化功能与统计分析。我们不会将你的信息出售给第三方。
              </p>
            </section>
            <section>
              <h2 className="text-lg font-semibold text-white">3. 广告与第三方</h2>
              <p className="mt-2">
                本站可能接入第三方广告服务（如 Google AdSense）与联盟营销链接。第三方可能使用 Cookie
                进行广告投放与效果统计。
              </p>
            </section>
            <section>
              <h2 className="text-lg font-semibold text-white">4. Cookie</h2>
              <p className="mt-2">
                Cookie 用于改善体验与统计分析。你可以在浏览器设置中关闭 Cookie。
              </p>
            </section>
            <section>
              <h2 className="text-lg font-semibold text-white">5. 联系我们</h2>
              <p className="mt-2">
                如有隐私相关问题，请联系：wuhs7806@gmail.com
              </p>
            </section>
          </div>
        </section>
      </main>
    </div>
  );
}
