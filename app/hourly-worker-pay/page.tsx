/* eslint-disable @next/next/no-html-link-for-pages -- GitHub Pages static export needs plain anchors with the repository base path. */
import type { Metadata } from "next";

const appStoreURL = "https://apps.apple.com/cn/app/%E5%B7%A5%E6%97%B6%E6%A0%B8%E5%AF%B9/id6800185417?ct=github_hourly_worker&mt=8";
const structuredData = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "小时工工资怎么算｜工时记录与工资条核对",
  description: "按小时记录工时、时薪、加班、补贴和扣款，估算期望工资，再与工资条实发金额核对差额。",
  url: "https://wanglei13975.github.io/gongshi-heduei-site/hourly-worker-pay/",
  mainEntity: {
    "@type": "SoftwareApplication",
    name: "工时核对",
    operatingSystem: "iOS",
    applicationCategory: "UtilitiesApplication",
    installUrl: appStoreURL,
    offers: [
      { "@type": "Offer", price: "0", priceCurrency: "CNY", description: "基础记录与简单计薪" },
      { "@type": "Offer", price: "6", priceCurrency: "CNY", description: "9 月 1 日至 25 日限时永久买断" },
      { "@type": "Offer", price: "38", priceCurrency: "CNY", description: "年度订阅" },
    ],
  },
};

export const metadata: Metadata = {
  title: "小时工工资怎么算｜工时记录与工资条核对",
  description: "按小时记录工时、时薪、加班、补贴和扣款，估算期望工资，再与工资条实发金额核对差额。",
  alternates: { canonical: "/hourly-worker-pay" },
  openGraph: {
    title: "小时工工资怎么算？先把每个工时记清楚",
    description: "按小时记录，再与工资条逐项核对；复杂规则可继续用工时核对 App。",
    type: "article",
    images: [{ url: "/og.png", width: 1728, height: 910, alt: "工时核对——小时工工资核对" }],
  },
};

export default function HourlyWorkerPayPage() {
  return (
    <main className="intentPage">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <nav className="nav" aria-label="主导航">
        <a className="brand" href="/">工时核对</a>
        <div className="navLinks">
          <a href="/calculator">快速试算</a>
          <a href="/salary-gap">工资差额</a>
          <a href="/shift-work">倒班核对</a>
          <a href="/support">支持</a>
        </div>
      </nav>

      <section className="intentHero">
        <p className="eyebrow"><span /> 小时工与按时计薪</p>
        <h1>小时工工资怎么算，<br /><em>先把每个工时记清楚。</em></h1>
        <p className="intentLead">按小时结算时，最容易漏掉的是临时加班、不同班次的时薪、补贴和扣款。先记录实际工作，再算出期望金额，最后与工资条上的实发金额核对。</p>
        <div className="intentActions">
          <a className="storeCta" href={appStoreURL} target="_blank" rel="noreferrer">在 App Store 开始记录 <span>↗</span></a>
          <a className="textLink" href="/calculator">先用网页免费试算 <span>→</span></a>
        </div>
        <p className="availability">基础记录免费；9 月 1 日至 25 日限时 ¥6 永久买断，之后恢复 ¥28；另有 ¥38/年订阅。</p>
      </section>

      <section className="intentSteps" aria-labelledby="hourly-steps-title">
        <p className="eyebrow dark"><span /> 从工时到工资条</p>
        <h2 id="hourly-steps-title">每个小时有记录，<br />月底才有依据。</h2>
        <div className="intentGrid">
          <article><strong>01</strong><h3>记录实际工时</h3><p>按日期记下开始、结束、休息和实际工时，不让零散班次只留在聊天记录里。</p></article>
          <article><strong>02</strong><h3>分开计薪项目</h3><p>分别记录时薪、加班、计件、岗位补贴和扣款，按自己的工作场景保存计薪规则。</p></article>
          <article><strong>03</strong><h3>核对实发金额</h3><p>输入工资条实发金额，查看期望与实发的差额，并保留月份记录方便复核。</p></article>
        </div>
      </section>

      <section className="intentProof">
        <div>
          <p className="eyebrow"><span /> 常见核对场景</p>
          <h2>小时不多，<br /><em>也值得算得明白。</em></h2>
        </div>
        <ul>
          <li>不同日期或岗位的时薪不一样</li>
          <li>临时加班、夜班和跨零点班次容易漏记</li>
          <li>补贴、交通费或扣款没有单独列出</li>
          <li>工资条只有总数，想保留自己的计算过程</li>
        </ul>
      </section>

      <section className="intentBottom">
        <h2>先免费试算，<br />再决定是否长期记录。</h2>
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
