/* eslint-disable @next/next/no-html-link-for-pages -- GitHub Pages static export needs plain anchors with the repository base path. */
export default function Support() {
  return <main className="legal">
    <a className="back" href="/">← 返回工时核对</a>
    <p className="legalKicker">HELP & SUPPORT</p>
    <h1>帮助与支持</h1>
    <p className="legalLead">遇到问题时，先从下面的常见场景开始。你的工资与工时数据不会自动上传给我们。</p>

    <h2>如何开始计算期望薪资？</h2>
    <p>先在“档案”中设置计薪规则，再到“记录”按日期添加班次、工时、计件、补贴或扣款。规则未设置时，App 会保留记录，但不会用虚构费率显示看似可信的 ¥0 收入。</p>

    <h2>如何核对工资条？</h2>
    <p>打开“结算”，选择月份并输入实发金额。App 会把实发金额与本地计算的期望薪资比较，显示多付或少付差额。结果仅供个人核对参考。</p>

    <h2>高级功能为什么被锁定？</h2>
    <p>复杂计薪规则、多档案、完整核对历史、趋势和桌面小组件需要有效的买断或年度订阅权益。请在“设置 → 解锁完整功能”中查看当前 App Store 商品。</p>

    <h2>如何恢复购买或管理订阅？</h2>
    <p>在升级页面点击“恢复购买”。请确认设备登录的是原购买 Apple ID。年度订阅用户可从页面进入 Apple 的系统订阅管理；我们无法代替 Apple 取消、退款或更改订阅。</p>

    <h2>购买失效后数据会消失吗？</h2>
    <p>不会。付费期间创建的档案、复杂规则、历史和小组件配置会保留。高级编辑会锁定，但数据仍可只读查看，备份、恢复、CSV 导入导出始终可用。</p>

    <h2>桌面小组件没有更新？</h2>
    <p>先打开 App，确认已选择小组件展示档案并具有有效权益；然后回到主屏幕等待 iOS 刷新。每次修改工时、规则或档案后，App 都会主动请求更新，系统也会安排周期刷新。</p>

    <h2>如何备份或迁移数据？</h2>
    <p>在“设置”中使用 JSON 备份与恢复；如需表格处理，可使用 CSV 导出和导入。导入前建议先备份。分享文件前请检查其中是否包含不希望提供给他人的工资信息。</p>

    <h2>联系我们</h2>
    <p>请邮件发送 iOS 版本、工时核对版本、问题发生步骤和可公开的截图至 <a className="inlineLink" href="mailto:1515939993@qq.com">1515939993@qq.com</a>。请先遮盖工资、单位、备注等私密信息；我们不会索要 Apple ID 密码、验证码或银行卡资料。</p>
    <p><a className="textLink" href="/privacy">查看隐私政策 <span>→</span></a></p>
  </main>;
}
