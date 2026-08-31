/* eslint-disable @next/next/no-html-link-for-pages -- GitHub Pages static export needs plain anchors with the repository base path. */
import Image from "next/image";
import QuickCheck from "./QuickCheck";

const features = [
  {
    number: "01",
    title: "记录不漏项",
    body: "按日期记录班次、工时、计件、补贴和扣款。休息日、节假日与加班倍率各自归位。",
  },
  {
    number: "02",
    title: "金额可追溯",
    body: "用你的计薪规则计算本月期望薪资，每一笔金额都能回到原始记录，不用再对着聊天记录反复算。",
  },
  {
    number: "03",
    title: "工资条能核对",
    body: "输入实发金额，立即看到多付或少付差额，并按月份保留核对结果，沟通时有据可查。",
  },
];

const paidFeatures = [
  "复杂倍率、计件阶梯与补贴扣款组合",
  "多个计薪档案，区分岗位或工作场景",
  "完整核对历史与多月收入、工时趋势",
  "桌面小组件查看本月期望薪资与工时",
];

const appStoreURL = "https://apps.apple.com/cn/app/%E5%B7%A5%E6%97%B6%E6%A0%B8%E5%AF%B9/id6800185417?ct=github_home&mt=8";

const productStructuredData = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "工时核对",
  applicationCategory: "UtilitiesApplication",
  operatingSystem: "iOS",
  description: "记录班次、工时与计件，按自己的计薪规则计算期望薪资，并核对工资条差额。",
  image: "https://wanglei13975.github.io/gongshi-heduei-site/app-icon.png",
  url: "https://wanglei13975.github.io/gongshi-heduei-site/",
  downloadUrl: appStoreURL,
  offers: [
    { "@type": "Offer", price: "0", priceCurrency: "CNY", description: "基础记录和简单计薪" },
    { "@type": "Offer", price: "6", priceCurrency: "CNY", description: "2026-09-01 至 2026-09-25 限时永久买断高级功能" },
    { "@type": "Offer", price: "38", priceCurrency: "CNY", description: "年度自动续费订阅" },
  ],
};

export default function Home() {
  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productStructuredData) }} />
      <nav className="nav" aria-label="主导航">
        <a className="brand" href="/">
          <Image src="/app-icon.png" width={42} height={42} alt="工时核对图标" priority />
          <span>工时核对</span>
        </a>
        <div className="navLinks">
          <a href="/calculator">快速试算</a>
          <a href="/shift-work">倒班核对</a>
          <a href="/salary-gap">工资差额</a>
          <a href="/hourly-worker-pay">小时工</a>
          <a href="/night-shift-pay">夜班怎么算</a>
          <a href="/overtime-pay">加班工资</a>
          <a href="/piecework-pay">计件工资</a>
          <a href="/wage-check-app">工资核对 App</a>
          <a href="#features">功能</a>
          <a href="/privacy">隐私</a>
          <a href="/support">支持</a>
        </div>
      </nav>

      <section className="hero">
        <div className="heroCopy">
          <p className="eyebrow"><span /> 为认真工作的人，把账算清楚</p>
          <h1>每一小时，<br /><em>都算得明白。</em></h1>
          <p className="lead">记录工时与计件，按自己的规则计算期望薪资，再与工资条逐项核对。少付多少，不再靠感觉。</p>
          <div className="trustRow" aria-label="产品特点">
            <span>本地优先</span><span>无广告</span><span>不追踪</span>
          </div>
          <a className="storeCta" href={appStoreURL} target="_blank" rel="noreferrer">
            在 App Store 打开工时核对 <span>↗</span>
          </a>
          <p className="availability">免费开始记录；9 月 1 日至 25 日限时 ¥6 永久买断，之后恢复 ¥28；另有 ¥38/年订阅 · 已上架 App Store</p>
        </div>
        <div className="heroStage" aria-label="工时核对桌面组件预览">
          <div className="orbit orbitOne" />
          <div className="orbit orbitTwo" />
          <div className="earningsCard">
            <div className="cardTop"><span>2026 年 8 月</span><b>期望薪资</b></div>
            <strong>¥ 8,420.00</strong>
            <div className="meter"><i /></div>
            <div className="cardBottom"><span>本月工时</span><b>168.0 小时</b></div>
          </div>
          <div className="privacyChip">仅在你的设备上计算</div>
        </div>
      </section>

      <section className="problemBand">
        <p>工资条只有一个结果，<br />你需要的是计算过程。</p>
        <div><span>班次</span><span>×</span><span>倍率</span><span>+</span><span>计件</span><span>±</span><span>补贴扣款</span></div>
      </section>

      <QuickCheck campaign="github_home" />

      <section className="features" id="features">
        <div className="sectionIntro">
          <p className="eyebrow dark"><span /> 从记录到核对</p>
          <h2>不是记个数字。<br />是把每一笔都讲清楚。</h2>
        </div>
        <div className="featureGrid">
          {features.map((feature) => (
            <article key={feature.number}>
              <span>{feature.number}</span>
              <h3>{feature.title}</h3>
              <p>{feature.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="showcase">
        <div className="showcaseCopy">
          <p className="eyebrow"><span /> 一眼看见重点</p>
          <h2>当月、趋势、历史，<br />各有自己的答案。</h2>
          <p>金额与工时始终使用真实记录计算。高级功能在购买权益失效后保留原有配置和数据，不删除、不降级；恢复权益后可继续使用。</p>
          <ul>
            <li>按计薪档案隔离数据</li>
            <li>支持浅色、深色与无障碍大字号</li>
            <li>备份、恢复、CSV 导入导出始终免费</li>
          </ul>
        </div>
        <div className="screens" aria-label="应用界面预览">
          <figure><Image src="/trend.png" width={402} height={874} alt="工时与收入趋势页面" /><figcaption>趋势</figcaption></figure>
          <figure className="screenMain"><Image src="/widget.png" width={402} height={874} alt="高级小组件配置页面" /><figcaption>小组件</figcaption></figure>
          <figure><Image src="/history.png" width={402} height={874} alt="工资条核对历史页面" /><figcaption>核对历史</figcaption></figure>
        </div>
      </section>

      <section className="premium">
        <div>
          <p className="eyebrow dark"><span /> 高级功能</p>
          <h2>简单记录免费。<br />复杂工作，也有章法。</h2>
          <p className="premiumNote">中国区 9 月 1 日至 25 日限时永久买断 ¥6，9 月 26 日起恢复 ¥28；年度订阅 ¥38/年并自动续费。实际价格与可用性以 App Store 最终展示为准。</p>
          <a className="storeCta" href={appStoreURL} target="_blank" rel="noreferrer">
            查看方案并购买 <span>↗</span>
          </a>
        </div>
        <ul>{paidFeatures.map((item) => <li key={item}>{item}</li>)}</ul>
      </section>

      <section className="privacyBand">
        <div>
          <p className="eyebrow"><span /> Privacy by design</p>
          <h2>你的工资数据，<br />不该成为广告画像。</h2>
        </div>
        <div>
          <p>无需注册账户。工时、计薪规则、工资条金额和核对历史默认只保存在设备上。没有广告，没有第三方分析，也不跨 App 追踪。</p>
          <p>应用内购买由 Apple 处理；桌面小组件只共享当前月汇总，不共享单条记录、备注或工资条。</p>
          <a className="textLink" href="/privacy">阅读完整隐私政策 <span>→</span></a>
        </div>
      </section>

      <section className="disclaimer">
        <strong>说明</strong>
        <p>计算结果仅供个人工时与薪资核对参考，不构成工资发放、税务、社保或劳动法律意见。请以劳动合同、单位制度及当地规定为准。</p>
      </section>

      <footer>
        <div className="brand"><Image src="/app-icon.png" width={36} height={36} alt="" /><span>工时核对</span></div>
        <p>把工时、薪资与工资条核对清楚。</p>
        <div><a href="/privacy">隐私政策</a><a href="/support">帮助与支持</a></div>
      </footer>
    </main>
  );
}
