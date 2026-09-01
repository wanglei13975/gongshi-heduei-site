/* eslint-disable @next/next/no-html-link-for-pages -- GitHub Pages static export needs plain anchors with the repository base path. */
const appStoreURL = "https://apps.apple.com/cn/app/%E5%B7%A5%E6%97%B6%E6%A0%B8%E5AF%B9/id6800185417?ct=github_privacy&mt=8";

export default function Privacy() {
  return <main className="legal">
    <a className="back" href="/">← 返回工时核对</a>
    <p className="legalKicker">PRIVACY POLICY</p>
    <h1>隐私政策</h1>
    <p className="date">生效日期：2026 年 8 月 9 日</p>
    <p className="legalLead">工时核对采用本地优先设计。我们不以你的工时、工资或工作安排换取广告收入。</p>

    <h2>1. 我们不收集什么</h2>
    <p>工时记录、班次、计件数量、补贴、扣款、计薪规则、工资条金额、核对历史和备注默认只在你的设备上处理和保存。我们不建立用户账户，不接收这些内容，也不出售或共享这些内容。</p>

    <h2>2. 网络、分析与追踪</h2>
    <p>工时核对不包含广告、第三方分析 SDK 或跨 App 追踪，不使用 IDFA，也没有自有业务后端。应用内购买、恢复购买和订阅管理会通过 Apple StoreKit 与 App Store 服务通信。</p>

    <h2>3. 应用内购买</h2>
    <p>购买与订阅由 Apple 处理。工时核对只读取 Apple 提供并经过验证的权益状态，用于判断高级功能是否可用；我们不接触银行卡、付款凭据或完整交易资料。</p>

    <h2>4. 桌面小组件</h2>
    <p>启用高级小组件后，App 会通过受系统保护的 App Group 向 Widget Extension 提供所选档案的当前月份、期望薪资总额与工时总计。不会共享单条工时记录、备注、工资条或核对历史。权益失效时，小组件快照会锁定并清除金额与工时。</p>

    <h2>5. 导入、导出与备份</h2>
    <p>CSV 导入只读取你主动选择的文件。CSV 导出和 JSON 备份在设备上生成，只有当你主动使用系统分享或文件选择器时才会离开 App。分享目标与后续保留由你决定。</p>

    <h2>6. 数据保护与删除</h2>
    <p>应用数据与应用控制的备份、导出临时文件采用 iOS 完整文件保护。已删除记录可在 30 天内恢复，超期后自动清理。你可以在 App 内删除记录和档案；卸载 App 会移除应用沙盒内的数据。你主动导出到其他位置的文件需由你自行删除。</p>

    <h2>7. 儿童隐私</h2>
    <p>本应用不以儿童为目标，也不会主动收集儿童个人信息。</p>

    <h2>8. 政策变更与联系</h2>
    <p>若隐私处理方式发生实质变化，我们会更新本页与生效日期。隐私问题请发送邮件至 <a className="inlineLink" href="mailto:1515939993@qq.com">1515939993@qq.com</a>，或访问<a className="inlineLink" href="/support">支持页面</a>。</p>
    <p><a className="storeCta" href={appStoreURL} target="_blank" rel="noreferrer">在 App Store 开始记录 <span>↗</span></a></p>
  </main>;
}
