import type { Metadata } from "next";
import { Noto_Sans_SC, Noto_Serif_SC } from "next/font/google";
import "./globals.css";

const bodyFont = Noto_Sans_SC({
  variable: "--font-body",
  weight: ["300", "400", "500", "600"],
  subsets: ["latin"],
});

const displayFont = Noto_Serif_SC({
  variable: "--font-display",
  weight: ["400", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "jerrywu 的博客",
  description: "技术博客、个人博客与 AI 工具体验的个人品牌站",
  metadataBase: new URL("https://whsls.net"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "jerrywu 的博客",
    description: "技术博客、个人博客与 AI 工具体验的个人品牌站",
    url: "https://whsls.net",
    siteName: "jerrywu 的博客",
    locale: "zh_CN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "jerrywu 的博客",
    description: "技术博客、个人博客与 AI 工具体验的个人品牌站",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <head>
        {/* Google Adsense */}
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3071169904021838"
          crossOrigin="anonymous"
        />
        {/* 
          Google Analytics 4 
          TODO: 请将 G-XXXXXXXXXX 替换为你的真实 GA4 测量 ID
          获取地址: https://analytics.google.com/
        */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-XXXXXXXXXX');
            `,
          }}
        />
      </head>
      <body className={`${bodyFont.variable} ${displayFont.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
