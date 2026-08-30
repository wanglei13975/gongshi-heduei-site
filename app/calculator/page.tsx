/* eslint-disable @next/next/no-html-link-for-pages -- GitHub Pages static export needs plain anchors with the repository base path. */
import Image from "next/image";
import QuickCheck from "../QuickCheck";

const appStoreURL = "https://apps.apple.com/cn/app/%E5%B7%A5%E6%97%B6%E6%A0%B8%E5%AF%B9/id6800185417?ct=github_calculator&mt=8";

export const metadata = {
  title: "工资差额计算器｜工时核对",
  description: "先用工资差额计算器估算期望工资，再用工时核对记录倒班、加班、计件、补贴和扣款。计算在浏览器本地完成。",
  openGraph: {
    title: "工资差额计算器｜工时核对",
    description: "先算期望工资，再与工资条实发金额核对差额。",
    type: "website",
    images: [{ url: "/og.png", width: 1728, height: 910, alt: "工时核对——工资差额计算器" }],
  },
};

export default function Calculator() {
  return (
    <main>
      <nav className="nav" aria-label="主导航">
        <a className="brand" href="/">
          <Image src="/app-icon.png" width={42} height={42} alt="工时核对图标" priority />
          <span>工时核对</span>
        </a>
        <div className="navLinks">
          <a href="/">首页</a>
          <a href="/privacy">隐私</a>
          <a href="/support">支持</a>
        </div>
      </nav>

      <section className="calculatorIntro">
        <p className="eyebrow"><span /> 工资差额计算器</p>
        <h1>先算清楚，<br /><em>再去核对工资条。</em></h1>
        <p>输入本月工时、平均时薪和工资条实发金额，快速估算可能的差额。需要倒班倍率、计件阶梯、补贴或扣款时，再交给工时核对 App 逐项记录。</p>
      </section>

      <QuickCheck />

      <section className="calculatorGuide">
        <div>
          <p className="eyebrow dark"><span /> 为什么用记录核对</p>
          <h2>一笔估算很快。<br />一整月要能追溯。</h2>
        </div>
        <div>
          <p>简单时薪可以手算，但倒班、加班、计件和补贴扣款叠在一起时，最容易漏掉的是规则和来源。工时核对把每天记录、计薪规则、期望工资和实发金额放在同一条核对路径里。</p>
          <ul>
            <li>本地记录，不需要注册账户</li>
            <li>备份、恢复、CSV 导入导出始终免费</li>
            <li>复杂规则、完整历史、趋势和小组件可选择购买</li>
          </ul>
          <p><a className="storeCta" href={appStoreURL} target="_blank" rel="noreferrer">下载工时核对 <span>↗</span></a></p>
        </div>
      </section>

      <section className="calculatorFaq" aria-labelledby="calculator-faq-title">
        <div>
          <p className="eyebrow"><span /> 常见问题</p>
          <h2 id="calculator-faq-title">先把疑问问清楚，<br /><em>再决定要不要记录。</em></h2>
        </div>
        <div className="faqList">
          <details open>
            <summary>这个工资差额计算器适合什么情况？</summary>
            <p>它适合先估算简单的工时 × 时薪差额。倒班倍率、加班、计件阶梯、补贴或扣款叠加时，建议在工时核对 App 中逐日记录。</p>
          </details>
          <details>
            <summary>工时和工资数据会上传吗？</summary>
            <p>本页的试算只在浏览器内完成，不上传输入内容。App 不要求注册，记录和核对历史默认保存在你的设备上。</p>
          </details>
          <details>
            <summary>App 需要付费才能开始记录吗？</summary>
            <p>基础记录和简单计薪可以先使用；复杂规则、完整历史、趋势统计和高级小组件可在 App 内选择永久买断或年度订阅。实际价格以 App Store 门店展示为准。</p>
          </details>
          <details>
            <summary>计算结果可以作为工资或劳动争议结论吗？</summary>
            <p>不能。本工具用于个人记录和核对参考，不替代劳动合同、单位制度、税务或劳动法律意见。</p>
          </details>
        </div>
      </section>

      <footer className="calculatorFooter">
        <div className="brand"><Image src="/app-icon.png" width={36} height={36} alt="" /><span>工时核对</span></div>
        <p>把工时、薪资与工资条核对清楚。</p>
        <div><a href="/">首页</a><a href="/privacy">隐私政策</a><a href="/support">帮助与支持</a></div>
      </footer>
    </main>
  );
}
