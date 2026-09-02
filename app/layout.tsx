import type { Metadata } from "next";
import "./globals.css";

const appStoreURL = "https://apps.apple.com/cn/app/%E5%B7%A5%E6%97%B6%E6%A0%B8%E5%AF%B9/id6800185417?ppid=2a335c72-49d1-4510-9067-1c9c78518572&ct=github_mobile_cta_cpp&mt=8";

const publicSiteOrigin = process.env.GITHUB_PAGES === "1"
  ? "https://wanglei13975.github.io/gongshi-heduei-site"
  : "https://gongshi-heduei.wanglei13975.chatgpt.site";

export const metadata: Metadata = {
  metadataBase: new URL(publicSiteOrigin),
  title: "工时核对｜工时、薪资与工资条核对",
  description: "记录班次、工时与计件，按自己的计薪规则计算期望薪资，并核对工资条差额。数据本地保存，无广告、不追踪。",
  alternates: { canonical: "/" },
  other: {
    "apple-itunes-app": "app-id=6800185417",
  },
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
  return <html lang="zh-CN"><body>{children}<div className="mobilePurchaseBar" aria-label="限时购买入口">
    <span><strong>9/1–9/25 ¥6</strong><small>永久买断高级功能</small></span>
    <a href={appStoreURL} target="_blank" rel="noreferrer">打开 App Store <span>↗</span></a>
  </div></body></html>;
}
