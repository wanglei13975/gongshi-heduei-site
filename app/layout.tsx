import type { Metadata } from "next";
import "./globals.css";

const publicSiteOrigin = process.env.GITHUB_PAGES === "1"
  ? "https://wanglei13975.github.io/gongshi-heduei-site"
  : "https://gongshi-heduei.wanglei13975.chatgpt.site";

export const metadata: Metadata = {
  metadataBase: new URL(publicSiteOrigin),
  title: "工时核对｜工时、薪资与工资条核对",
  description: "记录班次、工时与计件，按自己的计薪规则计算期望薪资，并核对工资条差额。数据本地保存，无广告、不追踪。",
  icons: { icon: "/app-icon.png", shortcut: "/app-icon.png" },
  openGraph: {
    title: "工时核对｜每一小时，都算得明白",
    description: "工时、薪资与工资条差额，一次核清。",
    type: "website",
    locale: "zh_CN",
    images: [{ url: "/og.png", width: 1728, height: 910, alt: "工时核对——每一小时，都算得明白" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "工时核对｜每一小时，都算得明白",
    description: "工时、薪资与工资条差额，一次核清。",
    images: ["/og.png"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="zh-CN"><body>{children}</body></html>;
}
