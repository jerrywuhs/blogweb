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
  title: "老吴的工作站",
  description: "技术博客、个人博客与 AI 工具体验的个人品牌站",
  metadataBase: new URL("https://whsls.net"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "老吴的工作站",
    description: "技术博客、个人博客与 AI 工具体验的个人品牌站",
    url: "https://whsls.net",
    siteName: "老吴的工作站",
    locale: "zh_CN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "老吴的工作站",
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
      <body className={`${bodyFont.variable} ${displayFont.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
