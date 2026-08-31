/* eslint-disable @next/next/no-html-link-for-pages -- GitHub Pages static export needs plain anchors with the repository base path. */
import type { Metadata } from "next";

const appStoreURL = "https://apps.apple.com/cn/app/%E5%B7%A5%E6%97%B6%E6%A0%B8%E5%AF%B9/id6800185417?ppid=2a335c72-49d1-4510-9067-1c9c78518572&ct=github_wage_check_app&mt=8";
const structuredData = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "工时核对",
  operatingSystem: "iOS",
  applicationCategory: "UtilitiesApplication",
  description: "记录工时、倒班、加班和计件，再与工资条逐项核对差额。",
  url: "https://wanglei13975.github.io/gongshi-heduei-site/wage-check-app/",
  installUrl: appStoreURL,
  offers: [
    { "@type": "Offer", price: "0", priceCurrency: "CNY", description: "基础记录与简单计薪" },
    { "@type": "Offer", price: "6", priceCurrency: "CNY", description: "9 月 1 日至 25 日限时永久买断" },
    { "@type": "Offer", price: "38", priceCurrency: "CNY", description: "年度订阅" },
  ],
};

export const metadata: Metadata = {
  title: "工资核对App｜记录工时、加班与工资条差额",
  description: "工资核对 App 免费下载：记录倒班、加班、计件、补贴和扣款，按自己的规则计算期望工资，再与工资条核对差额。",
  alternates: { canonical: "/wage-check-app" },
  openGraph: {
    title: "工资核对 App｜把每一小时和工资条对上",
    description: "免费开始记录工时，再按自己的规则核对工资条差额。",
    type: "website",
    images: [{ url: "/og.png", width: 1728, height: 910, alt: "工时核对——工资核对 App" }],
  },
};

export default function WageCheckAppPage() {
  return (
    <main className="intentPage">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <nav className="nav" aria-label="主导航">
        <a className="brand" href="/">工时核对</a>
        <div className="navLinks">
          <a href="/calculator">快速试算</a>
          <a href="/shift-work">倒班核对</a>
          <a href="/salary-gap">工资差额</a>
          <a href="/support">支持</a>
        </div>
      </nav>

      <section className="intentHero">
        <p className="eyebrow"><span /> 工资核对 App · iPhone</p>
        <h1>工资核对 App，<br /><em>把每一小时和工资条对上。</em></h1>
        <p className="intentLead">如果你正在找一款工资核对 App，可以先免费记录班次、工时和计件，再按自己的计薪规则算出期望金额，最后输入工资条实发金额，查看差额从哪里来。</p>
        <div className="intentActions">
          <a className="storeCta" href={appStoreURL} target="_blank" rel="noreferrer">9/1–9/25 ¥6 买断 · 免费下载 <span>↗</span></a>
          <a className="textLink" href="/calculator">先用网页免费试算 <span>→</span></a>
        </div>
        <p className="availability">基础记录和简单计薪免费；9 月 1 日至 25 日限时 ¥6 永久买断，之后恢复 ¥28；另有 ¥38/年订阅。</p>
        <p className="purchasePath"><strong>安装后购买路径：</strong>先免费记录一条班次；需要完整核对时，打开“设置 → 解锁完整功能”，选择 App Store 显示的 ¥6 永久买断。</p>
      </section>

      <section className="intentSteps" aria-labelledby="wage-check-steps-title">
        <p className="eyebrow dark"><span /> 从记录到核对</p>
        <h2 id="wage-check-steps-title">工资核对不是只看总数，<br />而是留下每一步。</h2>
        <div className="intentGrid">
          <article><strong>01</strong><h3>记录实际班次</h3><p>按日期记下白班、夜班、休息日、节假日、加班和计件，不让月底只剩一个模糊总数。</p></article>
          <article><strong>02</strong><h3>套用自己的规则</h3><p>保存时薪、加班倍率、计件单价、补贴和扣款，按岗位或工作场景分开计算。</p></article>
          <article><strong>03</strong><h3>对照工资条</h3><p>输入实发金额，看见期望与实发的差额，并保留月份记录方便自己复核和沟通。</p></article>
        </div>
      </section>

      <section className="intentProof">
        <div>
          <p className="eyebrow"><span /> 适合这些情况</p>
          <h2>规则越复杂，<br /><em>越需要一条清楚的核对路径。</em></h2>
        </div>
        <ul>
          <li>两班倒、三班倒或夜班跨过零点</li>
          <li>平时、休息日和节假日适用不同倍率</li>
          <li>计件、阶梯单价、补贴和扣款混在一起</li>
          <li>想保留核对历史，但不想上传工资数据</li>
        </ul>
      </section>

      <section className="intentBottom">
        <h2>先免费开始，<br />需要时再解锁完整核对。</h2>
        <p>App 无需注册，工时、计薪规则、工资条金额和核对历史默认保存在你的设备上。内购由 Apple 处理。</p>
        <a className="storeCta" href={appStoreURL} target="_blank" rel="noreferrer">查看方案并下载 <span>↗</span></a>
        <p className="intentDisclaimer">计算结果仅供个人工时与薪资核对参考，不构成工资发放、税务、社保或劳动法律意见；具体规则以合同、单位制度及当地规定为准。</p>
      </section>

      <footer>
        <div className="brand"><span>工时核对</span></div>
        <p>把工时、薪资与工资条核对清楚。</p>
        <div><a href="/privacy">隐私政策</a><a href="/support">帮助与支持</a></div>
      </footer>
    </main>
  );
}
