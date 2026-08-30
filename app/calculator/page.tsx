/* eslint-disable @next/next/no-html-link-for-pages -- GitHub Pages static export needs plain anchors with the repository base path. */
import Image from "next/image";
import QuickCheck from "../QuickCheck";

export const metadata = {
  title: "工资差额计算器｜工时核对",
  description: "先用工资差额计算器估算期望工资，再用工时核对记录倒班、加班、计件、补贴和扣款。计算在浏览器本地完成。",
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
          <p><a className="storeCta" href="https://apps.apple.com/cn/app/id6800185417" target="_blank" rel="noreferrer">下载工时核对 <span>↗</span></a></p>
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
