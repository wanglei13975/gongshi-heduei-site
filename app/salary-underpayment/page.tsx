/* eslint-disable @next/next/no-html-link-for-pages -- GitHub Pages static export needs plain anchors with the repository base path. */
import type { Metadata } from "next";

const appStoreURL = "https://apps.apple.com/cn/app/%E5%B7%A5%E6%97%B6%E6%A0%B8%E5%AF%B9/id6800185417?ct=github_salary_underpayment&mt=8";
const structuredData = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "工资少发了怎么办？先核对工时和工资条差额",
  description: "把班次、加班、计件、补贴和扣款记录下来，算出期望工资，再与工资条实发金额核对差额。",
  url: "https://wanglei13975.github.io/gongshi-heduei-site/salary-underpayment/",
  mainEntity: {
    "@type": "SoftwareApplication",
    name: "工时核对",
    operatingSystem: "iOS",
    applicationCategory: "UtilitiesApplication",
    installUrl: appStoreURL,
    offers: [
      { "@type": "Offer", price: "0", priceCurrency: "CNY", description: "基础记录和简单计薪" },
      { "@type": "Offer", price: "6", priceCurrency: "CNY", description: "9 月 1 日至 25 日限时永久买断" },
      { "@type": "Offer", price: "38", priceCurrency: "CNY", description: "年度订阅" },
    ],
  },
};

export const metadata: Metadata = {
  title: "工资少发了怎么办？先核对工时和工资条差额",
  description: "把班次、加班、计件、补贴和扣款记录下来，算出期望工资，再与工资条实发金额核对差额。",
  alternates: { canonical: "/salary-underpayment" },
  openGraph: {
    title: "工资少发了怎么办？先把差额算清楚",
    description: "从实际工时和计薪规则开始核对，不靠感觉猜工资条哪里不对。",
    type: "website",
    images: [{ url: "/og.png", width: 1728, height: 910, alt: "工时核对——工资差额核对" }],
  },
};

export default function SalaryUnderpaymentPage() {
  return (
    <main className="intentPage">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <nav className="nav" aria-label="主导航">
        <a className="brand" href="/">工时核对</a>
        <div className="navLinks">
          <a href="/calculator">快速试算</a>
          <a href="/salary-gap">工资差额</a>
          <a href="/wage-check-app">工资核对 App</a>
          <a href="/support">支持</a>
        </div>
      </nav>

      <section className="intentHero">
        <p className="eyebrow"><span /> 工资条差额核对</p>
        <h1>工资少发了怎么办，<br /><em>先把差额算清楚。</em></h1>
        <p className="intentLead">先别只看工资条上的最后一个数字。把实际班次、工时、加班、计件、补贴和扣款记录下来，按自己的规则算出期望金额，再和实发金额逐项比较。</p>
        <div className="intentActions">
          <a className="storeCta" href={appStoreURL} target="_blank" rel="noreferrer">在 App Store 开始记录 <span>↗</span></a>
          <a className="textLink" href="/calculator">先用网页免费算一次 <span>→</span></a>
        </div>
        <p className="availability">基础记录免费；9 月 1 日至 25 日限时 ¥6 永久买断，之后恢复 ¥28；另有 ¥38/年自动续费订阅。</p>
      </section>

      <section className="intentSteps" aria-labelledby="underpayment-steps-title">
        <p className="eyebrow dark"><span /> 先核对，再沟通</p>
        <h2 id="underpayment-steps-title">把“少发了”，<br />拆成能复核的三步。</h2>
        <div className="intentGrid">
          <article><strong>01</strong><h3>记下实际工作</h3><p>按日期保留上下班时间、夜班跨零点、休息日、节假日和加班记录。</p></article>
          <article><strong>02</strong><h3>写清计算方式</h3><p>分别记录时薪、倍率、计件单价、补贴和扣款，避免不同项目混成一个估算数。</p></article>
          <article><strong>03</strong><h3>输入实发金额</h3><p>把工资条上的实发金额填入核对结果，看到差额和对应月份，便于自己复查。</p></article>
        </div>
      </section>

      <section className="intentProof">
        <div>
          <p className="eyebrow"><span /> 常见差额来源</p>
          <h2>先找到差额，<br /><em>再决定问哪里。</em></h2>
        </div>
        <ul>
          <li>加班小时数记录和工资条不一致</li>
          <li>夜班、休息日或节假日倍率没有单独列出</li>
          <li>计件、岗位补贴和扣款被合并在一个总数里</li>
          <li>只记得本月结果，却找不到当时的班次依据</li>
        </ul>
      </section>

      <section className="intentBottom">
        <h2>先免费核对一笔，<br />需要长期记录时再解锁。</h2>
        <p>网页试算只在浏览器本地运行；App 无需注册，工时和工资数据默认保存在你的设备上。</p>
        <a className="storeCta" href={appStoreURL} target="_blank" rel="noreferrer">下载工时核对 <span>↗</span></a>
        <p className="purchasePath"><strong>安装后购买路径：</strong>先免费记录一条班次；需要完整核对时，打开“设置 → 解锁完整功能”，选择 App Store 显示的 ¥6 永久买断。</p>
        <p><a className="textLink" href="https://gist.github.com/wanglei13975/9bc6ad826f400276ed7f7e35f0c32bfa" target="_blank" rel="noreferrer">查看工资条核对清单 <span>↗</span></a></p>
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
