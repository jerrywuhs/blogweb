import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
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
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
