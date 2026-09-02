/* eslint-disable @next/next/no-html-link-for-pages -- GitHub Pages static export needs plain anchors with the repository base path. */
import type { Metadata } from "next";

const appStoreURL = "https://apps.apple.com/cn/app/%E5%B7%A5%E6%97%B6%E6%A0%B8%E5%AF%B9/id6800185417?ppid=2a335c72-49d1-4510-9067-1c9c78518572&ct=github_shift_work_cpp&mt=8";
const structuredData = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "工时核对",
  operatingSystem: "iOS",
  applicationCategory: "UtilitiesApplication",
  description: "记录倒班、夜班、加班和计件，按自己的计薪规则算出期望工资，再核对工资条差额。",
  url: "https://wanglei13975.github.io/gongshi-heduei-site/shift-work/",
  installUrl: appStoreURL,
  offers: [
    { "@type": "Offer", price: "0", priceCurrency: "CNY", description: "基础记录与简单计薪" },
    { "@type": "Offer", price: "6", priceCurrency: "CNY", description: "9 月 1 日至 25 日限时永久买断" },
    { "@type": "Offer", price: "38", priceCurrency: "CNY", description: "年度订阅" },
  ],
};

export const metadata: Metadata = {
  title: "倒班工资核对｜夜班、加班与工资条差额",
  description: "记录倒班、夜班、加班和计件，按自己的计薪规则算出期望工资，再核对工资条差额。",
  alternates: { canonical: "/shift-work" },
  openGraph: {
    title: "倒班工资，按你的规则核对",
    description: "把班次、倍率、计件和补贴扣款记清楚，再与工资条逐项核对。",
    type: "website",
    images: [{ url: "/og.png", width: 1728, height: 910, alt: "工时核对——倒班工资核对" }],
  },
};

export default function ShiftWorkPage() {
  return (
    <main className="intentPage">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <nav className="nav" aria-label="主导航">
        <a className="brand" href="/">工时核对</a>
        <div className="navLinks">
          <a href="/calculator">快速试算</a>
          <a href="/">产品介绍</a>
          <a href="/support">支持</a>
        </div>
      </nav>

      <section className="intentHero">
        <p className="eyebrow"><span /> 倒班、夜班与加班</p>
        <h1>倒班工资，<br /><em>按你的规则核对。</em></h1>
        <p className="intentLead">轮班表只告诉你上了多久，工资条只告诉你发了多少。工时核对把班次、倍率、计件、补贴和扣款放在同一条计算链里，帮你看见差额从哪里来。</p>
        <div className="intentActions">
          <a className="storeCta" href={appStoreURL} target="_blank" rel="noreferrer">在 App Store 开始记录 <span>↗</span></a>
          <a className="textLink" href="/calculator">先用网页免费试算 <span>→</span></a>
        </div>
        <p className="availability">免费开始记录；9 月 1 日至 25 日限时 ¥6 永久买断，之后恢复 ¥28；另有 ¥38/年订阅。</p>
      </section>

      <section className="intentSteps" aria-labelledby="intent-steps-title">
        <p className="eyebrow dark"><span /> 核对流程</p>
        <h2 id="intent-steps-title">从班次到工资条，<br />每一步都有依据。</h2>
        <div className="intentGrid">
          <article><strong>01</strong><h3>记录真实班次</h3><p>按日期记下白班、夜班、休息日、节假日、加班和计件，不再依赖零散聊天记录。</p></article>
          <article><strong>02</strong><h3>套用自己的规则</h3><p>按岗位或工作场景保存计薪档案，让时薪、倍率、计件阶梯、补贴和扣款各自归位。</p></article>
          <article><strong>03</strong><h3>核对实际金额</h3><p>输入工资条上的实发金额，看到期望与实发的差额，并能回到对应月份和记录。</p></article>
        </div>
      </section>

      <section className="intentProof">
        <div>
          <p className="eyebrow"><span /> 适合这些情况</p>
          <h2>规则越复杂，<br /><em>越值得留下过程。</em></h2>
        </div>
        <ul>
          <li>两班倒、三班倒与跨零点夜班</li>
          <li>平时、休息日、节假日不同倍率的加班</li>
          <li>按件计薪、阶梯单价与岗位补贴</li>
          <li>需要保留核对历史，但不想上传工资数据</li>
        </ul>
      </section>

      <section className="intentBottom">
        <h2>先免费试算，<br />再决定要不要记录。</h2>
        <p>网页计算器只在浏览器本地运行；App 无需注册，工时和工资数据默认保存在你的设备上。</p>
        <a className="storeCta" href={appStoreURL} target="_blank" rel="noreferrer">查看完整核对功能 <span>↗</span></a>
        <p className="intentDisclaimer">计算结果仅供个人工时与薪资核对参考，不构成工资发放、税务、社保或劳动法律意见。</p>
      </section>

      <footer>
        <div className="brand"><span>工时核对</span></div>
        <p>把工时、薪资与工资条核对清楚。</p>
        <div><a href="/privacy">隐私政策</a><a href="/support">帮助与支持</a></div>
      </footer>
    </main>
  );
}
