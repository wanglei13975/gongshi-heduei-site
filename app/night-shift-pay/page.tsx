/* eslint-disable @next/next/no-html-link-for-pages -- GitHub Pages static export needs plain anchors with the repository base path. */
import type { Metadata } from "next";

const appStoreURL = "https://apps.apple.com/cn/app/%E5%B7%A5%E6%97%B6%E6%A0%B8%E5%AF%B9/id6800185417?ppid=2a335c72-49d1-4510-9067-1c9c78518572";
const structuredData = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "夜班跨零点工资怎么核对",
  description: "把跨零点夜班按实际工作时间拆分，再按自己的计薪规则核对工资条差额。",
  totalTime: "PT5M",
  step: [
    { "@type": "HowToStep", name: "记下完整班次", text: "记录开始时间、结束时间，以及夜班跨过零点的实际日期。" },
    { "@type": "HowToStep", name: "拆分计薪区间", text: "按自己的计薪规则，把普通时段、加班时段和其他适用规则的时段分别记录。" },
    { "@type": "HowToStep", name: "对照实发金额", text: "算出期望金额后，输入工资条实发金额，查看差额并保留核对记录。" },
  ],
};

export const metadata: Metadata = {
  title: "夜班工资怎么算｜跨零点工时与工资条核对",
  description: "夜班跨过零点时，按实际时间拆分班次和计薪规则，再与工资条实发金额核对差额。",
  alternates: { canonical: "/night-shift-pay" },
  openGraph: {
    title: "夜班工资怎么算？先把跨零点班次记清楚",
    description: "按实际工作时间拆分夜班，再核对加班、补贴和工资条差额。",
    type: "article",
  },
};

export default function NightShiftPayPage() {
  return (
    <main className="intentPage">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <nav className="nav" aria-label="主导航">
        <a className="brand" href="/">工时核对</a>
        <div className="navLinks">
          <a href="/calculator">快速试算</a>
          <a href="/shift-work">倒班核对</a>
          <a href="/salary-gap">工资差额</a>
        </div>
      </nav>

      <section className="intentHero">
        <p className="eyebrow"><span /> 夜班与跨零点</p>
        <h1>夜班工资怎么算，<br /><em>先把时间记清楚。</em></h1>
        <p className="intentLead">夜班从晚上开始、第二天结束，最容易在日期和时段上漏记。先按实际工作时间还原班次，再套用你自己的计薪规则，最后与工资条金额核对。</p>
        <div className="intentActions">
          <a className="storeCta" href={appStoreURL} target="_blank" rel="noreferrer">在 App Store 记录夜班 <span>↗</span></a>
          <a className="textLink" href="/calculator">先用网页免费试算 <span>→</span></a>
        </div>
        <p className="availability">免费开始记录；复杂规则可选 ¥28 永久买断或 ¥38/年自动续费订阅。</p>
      </section>

      <section className="intentSteps" aria-labelledby="night-shift-steps-title">
        <p className="eyebrow dark"><span /> 核对方法</p>
        <h2 id="night-shift-steps-title">跨过零点，<br />也不要丢掉过程。</h2>
        <div className="intentGrid">
          <article><strong>01</strong><h3>记录完整起止时间</h3><p>记下实际开始和结束时间，不只写“上夜班”；同时保留班次对应的工作日期。</p></article>
          <article><strong>02</strong><h3>按规则分开计算</h3><p>把普通时段、加班时段、计件、补贴和扣款分别放进自己的规则，不混成一个估算总数。</p></article>
          <article><strong>03</strong><h3>与工资条对照</h3><p>输入实发金额，查看期望与实发的差额；具体倍率以劳动合同、单位制度和当地规定为准。</p></article>
        </div>
      </section>

      <section className="intentProof">
        <div>
          <p className="eyebrow"><span /> 为什么容易算错</p>
          <h2>少记一个时段，<br /><em>差额就藏起来了。</em></h2>
        </div>
        <ul>
          <li>只记“夜班”而没有记录实际起止时间</li>
          <li>跨过零点后仍把整班算在同一个日期</li>
          <li>把加班、岗位补贴和扣款混在工资总额里</li>
          <li>核对后没有留下月份和原始记录</li>
        </ul>
      </section>

      <section className="intentBottom">
        <h2>先试算一班，<br />再决定是否长期记录。</h2>
        <p>网页计算器只在浏览器本地运行；App 无需注册，工时和工资数据默认保存在你的设备上。</p>
        <a className="storeCta" href={appStoreURL} target="_blank" rel="noreferrer">查看完整核对功能 <span>↗</span></a>
        <p className="intentDisclaimer">本页只介绍记录与核对方法；计算结果不构成工资发放、税务、社保或劳动法律意见。</p>
      </section>

      <footer>
        <div className="brand"><span>工时核对</span></div>
        <p>把工时、薪资与工资条核对清楚。</p>
        <div><a href="/privacy">隐私政策</a><a href="/support">帮助与支持</a></div>
      </footer>
    </main>
  );
}
