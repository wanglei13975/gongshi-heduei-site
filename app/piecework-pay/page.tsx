/* eslint-disable @next/next/no-html-link-for-pages -- GitHub Pages static export needs plain anchors with the repository base path. */
import type { Metadata } from "next";

const appStoreURL = "https://apps.apple.com/cn/app/%E5%B7%A5%E6%97%B6%E6%A0%B8%E5%AF%B9/id6800185417?ppid=2a335c72-49d1-4510-9067-1c9c78518572&ct=github_piecework_pay_cpp&mt=8";
const structuredData = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "计件工资怎么算｜计件、阶梯单价与补贴核对",
  description: "记录计件数量、单价、阶梯规则、补贴和扣款，计算期望工资，再与工资条核对差额。",
  url: "https://wanglei13975.github.io/gongshi-heduei-site/piecework-pay/",
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
  title: "计件工资怎么算｜计件、阶梯单价与补贴核对",
  description: "记录计件数量、单价、阶梯规则、补贴和扣款，计算期望工资，再与工资条核对差额。",
  alternates: { canonical: "/piecework-pay" },
  openGraph: {
    title: "计件工资怎么算？把数量和单价分开记",
    description: "记录计件、阶梯单价和补贴扣款，再与工资条逐项核对。",
    type: "article",
    images: [{ url: "/og.png", width: 1728, height: 910, alt: "工时核对——计件工资核对" }],
  },
};

export default function PieceworkPayPage() {
  return (
    <main className="intentPage">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <nav className="nav" aria-label="主导航">
        <a className="brand" href="/">工时核对</a>
        <div className="navLinks">
          <a href="/calculator">快速试算</a>
          <a href="/overtime-pay">加班工资</a>
          <a href="/salary-gap">工资差额</a>
          <a href="/support">支持</a>
        </div>
      </nav>

      <section className="intentHero">
        <p className="eyebrow"><span /> 计件、阶梯单价与补贴</p>
        <h1>计件工资怎么算，<br /><em>先把数量和单价分开记。</em></h1>
        <p className="intentLead">计件数量、不同档位单价、返工扣款和岗位补贴都挤在工资条总数里时，很难知道差额从哪里来。按实际工作记录每个计件项目，再与实发金额逐项核对。</p>
        <div className="intentActions">
          <a className="storeCta" href={appStoreURL} target="_blank" rel="noreferrer">在 App Store 开始记录 <span>↗</span></a>
          <a className="textLink" href="/calculator">先用网页免费试算 <span>→</span></a>
        </div>
        <p className="availability">基础记录免费；9 月 1 日至 25 日限时 ¥6 永久买断，之后恢复 ¥28；另有 ¥38/年订阅。</p>
      </section>

      <section className="intentSteps" aria-labelledby="piecework-steps-title">
        <p className="eyebrow dark"><span /> 从计件明细到工资条</p>
        <h2 id="piecework-steps-title">数量有来源，<br />单价才有依据。</h2>
        <div className="intentGrid">
          <article><strong>01</strong><h3>记下完成数量</h3><p>按日期记录完成件数、工作场景和必要备注，不让月底的总件数失去来源。</p></article>
          <article><strong>02</strong><h3>分开计件规则</h3><p>保存单一单价或阶梯单价，并把补贴、扣款和其他计薪项目单独列出。</p></article>
          <article><strong>03</strong><h3>对照工资条</h3><p>计算期望金额并输入实发金额，看见差额，再回到对应日期和项目复核。</p></article>
        </div>
      </section>

      <section className="intentProof">
        <div>
          <p className="eyebrow"><span /> 适合这些情况</p>
          <h2>件数越多，<br /><em>越不能只记一个总数。</em></h2>
        </div>
        <ul>
          <li>不同产品或工序使用不同计件单价</li>
          <li>达到数量后切换阶梯单价</li>
          <li>返工、不良品、补贴和扣款混在一起</li>
          <li>需要区分多个岗位或工作场景的计薪档案</li>
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
