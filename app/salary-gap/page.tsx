/* eslint-disable @next/next/no-html-link-for-pages -- GitHub Pages static export needs plain anchors with the repository base path. */
import type { Metadata } from "next";

const appStoreURL = "https://apps.apple.com/cn/app/%E5%B7%A5%E6%97%B6%E6%A0%B8%E5%AF%B9/id6800185417?ct=github_salary_gap&mt=8";
const structuredData = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "工资条核对｜工资条少发怎么办与工资差额记录",
  description: "按班次、工时、加班、计件、补贴和扣款算出期望工资，再与工资条实发金额核对差额。",
  url: "https://wanglei13975.github.io/gongshi-heduei-site/salary-gap/",
  mainEntity: {
    "@type": "SoftwareApplication",
    name: "工时核对",
    operatingSystem: "iOS",
    applicationCategory: "UtilitiesApplication",
    installUrl: appStoreURL,
    offers: [
      { "@type": "Offer", price: "0", priceCurrency: "CNY" },
      { "@type": "Offer", price: "6", priceCurrency: "CNY", description: "9 月 1 日至 25 日限时永久买断" },
      { "@type": "Offer", price: "38", priceCurrency: "CNY", description: "年度订阅" },
    ],
  },
};

export const metadata: Metadata = {
  title: "工资条核对｜工资条少发怎么办与工资差额记录",
  description: "按班次、工时、加班、计件、补贴和扣款算出期望工资，再与工资条实发金额核对差额。",
  alternates: { canonical: "/salary-gap" },
  openGraph: {
    title: "工资条怎么核对？先把差额算清楚",
    description: "把每个班次和每项收入记下来，再与工资条逐项核对。",
    type: "website",
    images: [{ url: "/og.png", width: 1728, height: 910, alt: "工时核对——工资条差额核对" }],
  },
};

export default function SalaryGapPage() {
  return (
    <main className="intentPage">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <nav className="nav" aria-label="主导航">
        <a className="brand" href="/">工时核对</a>
        <div className="navLinks">
          <a href="/calculator">快速试算</a>
          <a href="/shift-work">倒班核对</a>
          <a href="/salary-underpayment">工资少发怎么办</a>
          <a href="/">产品介绍</a>
        </div>
      </nav>

      <section className="intentHero">
        <p className="eyebrow"><span /> 工资条核对与差额记录</p>
        <h1>工资条怎么核对，<br /><em>先把差额算清楚。</em></h1>
        <p className="intentLead">不要只对着工资条猜哪里不对。把班次、工时、加班倍率、计件、补贴和扣款按实际情况记录下来，先算出你应得的金额，再和实发金额逐项比较。</p>
        <div className="intentActions">
          <a className="storeCta" href={appStoreURL} target="_blank" rel="noreferrer">在 App Store 开始记录 <span>↗</span></a>
          <a className="textLink" href="/calculator">先用网页免费算一次 <span>→</span></a>
        </div>
        <p className="availability">免费开始记录；9 月 1 日至 25 日限时 ¥6 永久买断，之后恢复 ¥28；另有 ¥38/年自动续费订阅。</p>
      </section>

      <section className="intentSteps" aria-labelledby="salary-gap-steps-title">
        <p className="eyebrow dark"><span /> 三步找到差额</p>
        <h2 id="salary-gap-steps-title">把“少了多少”，<br />变成看得懂的过程。</h2>
        <div className="intentGrid">
          <article><strong>01</strong><h3>还原实际工作</h3><p>按日期记录白班、夜班、休息日、节假日、加班和计件，跨零点的班次也有迹可循。</p></article>
          <article><strong>02</strong><h3>写清计薪规则</h3><p>保存时薪、加班倍率、计件单价、岗位补贴和扣款，避免只拿一个总数反复估算。</p></article>
          <article><strong>03</strong><h3>对照工资条</h3><p>输入实发金额，看见期望与实发的差额，并保留月份记录，方便自己复核和沟通。</p></article>
        </div>
      </section>

      <section className="intentProof">
        <div>
          <p className="eyebrow"><span /> 常见核对场景</p>
          <h2>有过程，<br /><em>才知道该问什么。</em></h2>
        </div>
        <ul>
          <li>工资条上的加班小时数和自己的记录对不上</li>
          <li>夜班、休息日或节假日倍率没有单独列明</li>
          <li>计件工资、补贴和扣款混在一个总数里</li>
          <li>想保留自己的核对历史，但不想上传工资数据</li>
        </ul>
      </section>

      <section className="intentBottom">
        <h2>先免费试算，<br />再决定是否长期记录。</h2>
        <p>网页计算器只在浏览器本地运行；App 无需注册，工时和工资数据默认保存在你的设备上。</p>
        <a className="storeCta" href={appStoreURL} target="_blank" rel="noreferrer">查看完整核对功能 <span>↗</span></a>
        <p><a className="textLink" href="https://gist.github.com/wanglei13975/9bc6ad826f400276ed7f7e35f0c32bfa" target="_blank" rel="noreferrer">先看工资条核对清单 <span>↗</span></a></p>
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
