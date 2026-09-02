/* eslint-disable @next/next/no-html-link-for-pages -- GitHub Pages static export needs plain anchors with the repository base path. */
import type { Metadata } from "next";

const appStoreURL = "https://apps.apple.com/cn/app/%E5%B7%A5%E6%97%B6%E6%A0%B8%E5%AF%B9/id6800185417?ppid=2a335c72-49d1-4510-9067-1c9c78518572&ct=github_overtime_pay_cpp&mt=8";
const structuredData = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "加班工资怎么算｜倒班、休息日与节假日工时核对",
  description: "记录平时、休息日和节假日加班工时，按自己的计薪规则计算期望工资，再与工资条核对差额。",
  url: "https://wanglei13975.github.io/gongshi-heduei-site/overtime-pay/",
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
  title: "加班工资怎么算｜倒班、休息日与节假日工时核对",
  description: "记录平时、休息日和节假日加班工时，按自己的计薪规则计算期望工资，再与工资条核对差额。",
  alternates: { canonical: "/overtime-pay" },
  openGraph: {
    title: "加班工资怎么算？先把加班工时记清楚",
    description: "按自己的规则记录平时、休息日和节假日加班，再与工资条逐项核对。",
    type: "article",
    images: [{ url: "/og.png", width: 1728, height: 910, alt: "工时核对——加班工资核对" }],
  },
};

export default function OvertimePayPage() {
  return (
    <main className="intentPage">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <nav className="nav" aria-label="主导航">
        <a className="brand" href="/">工时核对</a>
        <div className="navLinks">
          <a href="/calculator">快速试算</a>
          <a href="/shift-work">倒班核对</a>
          <a href="/salary-gap">工资差额</a>
          <a href="/piecework-pay">计件工资</a>
        </div>
      </nav>

      <section className="intentHero">
        <p className="eyebrow"><span /> 平时、休息日与节假日加班</p>
        <h1>加班工资怎么算，<br /><em>先把加班工时记清楚。</em></h1>
        <p className="intentLead">轮班、加班、补休和临时调班混在一起时，只看工资条总数很难找到差额。按实际日期记录工时和加班情况，再用自己的计薪规则算出期望金额，最后与实发工资核对。</p>
        <div className="intentActions">
          <a className="storeCta" href={appStoreURL} target="_blank" rel="noreferrer">在 App Store 开始记录 <span>↗</span></a>
          <a className="textLink" href="/calculator">先用网页免费试算 <span>→</span></a>
        </div>
        <p className="availability">基础记录免费；9 月 1 日至 25 日限时 ¥6 永久买断，之后恢复 ¥28；另有 ¥38/年订阅。</p>
      </section>

      <section className="intentSteps" aria-labelledby="overtime-steps-title">
        <p className="eyebrow dark"><span /> 从加班记录到工资条</p>
        <h2 id="overtime-steps-title">每一次加班，<br />都留下可核对的依据。</h2>
        <div className="intentGrid">
          <article><strong>01</strong><h3>记下实际班次</h3><p>按日期记录开始、结束、跨零点和实际工时，分清平时、休息日与节假日场景。</p></article>
          <article><strong>02</strong><h3>套用自己的规则</h3><p>保存时薪、加班倍率、补贴和扣款，避免把不同日期的计算方式混在一个总数里。</p></article>
          <article><strong>03</strong><h3>核对实发金额</h3><p>输入工资条实发金额，看见期望与实发的差额，并保留月份记录方便复核。</p></article>
        </div>
      </section>

      <section className="intentProof">
        <div>
          <p className="eyebrow"><span /> 常见核对场景</p>
          <h2>加班天数不同，<br /><em>计算过程也要分开。</em></h2>
        </div>
        <ul>
          <li>平时延时、休息日和节假日加班混在一起</li>
          <li>夜班跨过零点，实际工时难以按日期还原</li>
          <li>加班、补贴和扣款没有单独列明</li>
          <li>想保留自己的计算过程，但不想上传工资数据</li>
        </ul>
      </section>

      <section className="intentBottom">
        <h2>先免费试算，<br />再决定是否长期记录。</h2>
        <p>网页计算器只在浏览器本地运行；App 无需注册，工时和工资数据默认保存在你的设备上。</p>
        <a className="storeCta" href={appStoreURL} target="_blank" rel="noreferrer">查看完整核对功能 <span>↗</span></a>
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
