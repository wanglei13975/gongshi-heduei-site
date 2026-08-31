"use client";

import { useMemo, useState } from "react";

const appStoreURLBase = "https://apps.apple.com/cn/app/%E5%B7%A5%E6%97%B6%E6%A0%B8%E5%AF%B9/id6800185417";

function numberOrZero(value: string) {
  const parsed = Number(value);
  return Number.isFinite(parsed) && parsed >= 0 ? parsed : 0;
}

function money(value: number) {
  return new Intl.NumberFormat("zh-CN", {
    style: "currency",
    currency: "CNY",
    minimumFractionDigits: 2,
  }).format(value);
}

export default function QuickCheck({ campaign = "github_calculator" }: { campaign?: string }) {
  const appStoreURL = `${appStoreURLBase}?ct=${encodeURIComponent(campaign)}&mt=8`;
  const [hours, setHours] = useState("160");
  const [rate, setRate] = useState("60");
  const [paid, setPaid] = useState("9000");
  const [shareStatus, setShareStatus] = useState("");
  const result = useMemo(() => {
    const expected = numberOrZero(hours) * numberOrZero(rate);
    const difference = expected - numberOrZero(paid);
    return { expected, difference };
  }, [hours, rate, paid]);

  const differenceLabel = result.difference >= 0 ? "按这组数字，可能少发" : "按这组数字，可能多发";

  async function shareCalculator() {
    const shareData = {
      title: "工资差额计算器｜工时核对",
      text: "先算清楚工资差额，再用工时核对记录倒班、加班和计件。",
      url: window.location.href,
    };
    try {
      if (navigator.share) {
        await navigator.share(shareData);
        setShareStatus("已打开分享面板");
        return;
      }
      await navigator.clipboard.writeText(shareData.url);
      setShareStatus("链接已复制");
    } catch (error) {
      if (error instanceof DOMException && error.name === "AbortError") return;
      setShareStatus("暂时无法分享，请复制浏览器地址");
    }
  }

  return (
    <section className="quickCheck" aria-labelledby="quick-check-title">
      <div className="quickCheckIntro">
        <p className="eyebrow"><span /> 先算一笔</p>
        <h2 id="quick-check-title">工资条上的结果，<br /><em>和你的记录对得上吗？</em></h2>
        <p>用一组数字快速感受差额核对。真实 App 还可以按倒班、计件、补贴、扣款和不同倍率逐项计算。</p>
      </div>
      <div className="quickCheckPanel">
        <div className="quickCheckFields">
          <label>本月工时（小时）<input type="number" min="0" step="0.1" value={hours} onChange={(event) => setHours(event.target.value)} /></label>
          <label>平均时薪（元）<input type="number" min="0" step="0.01" value={rate} onChange={(event) => setRate(event.target.value)} /></label>
          <label>工资条实发（元）<input type="number" min="0" step="0.01" value={paid} onChange={(event) => setPaid(event.target.value)} /></label>
        </div>
        <div className="quickCheckResult" aria-live="polite">
          <span>按时薪估算的期望工资</span>
          <strong>{money(result.expected)}</strong>
          <b className={result.difference >= 0 ? "differenceShort" : "differenceOver"}>{differenceLabel} {money(Math.abs(result.difference))}</b>
        </div>
        <p className="quickCheckNote">仅在浏览器内计算，不上传输入内容。复杂计薪请使用 App 内的真实记录和规则。</p>
        <div className="quickCheckActions">
          <a className="storeCta" href={appStoreURL} target="_blank" rel="noreferrer">在 App Store 继续核对 <span>↗</span></a>
          <button className="shareCta" type="button" onClick={shareCalculator}>分享这个计算器 <span>↗</span></button>
        </div>
        <p className="quickCheckPrice">基础记录免费；9 月 1 日至 25 日限时 ¥6 永久买断，之后恢复 ¥28；另有 ¥38/年自动续费。</p>
        <p className="shareStatus" role="status" aria-live="polite">{shareStatus}</p>
      </div>
    </section>
  );
}
