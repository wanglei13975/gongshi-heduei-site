import assert from "node:assert/strict";
import test from "node:test";
import { spawn } from "node:child_process";

const port = 4513;
let server;

test.before(async () => {
  server = spawn("npm", ["run", "start", "--", "--port", String(port)], { stdio: "ignore" });
  for (let i = 0; i < 40; i++) {
    try { const response = await fetch(`http://localhost:${port}/`); if (response.ok) return; } catch { /* server is still starting */ }
    await new Promise((resolve) => setTimeout(resolve, 250));
  }
  throw new Error("site did not start");
});

test.after(() => server?.kill());

async function page(path) {
  const response = await fetch(`http://localhost:${port}${path}`);
  assert.equal(response.status, 200);
  return response.text();
}

test("product page exposes real value and only approved public routes", async () => {
  const html = await page("/");
  assert.match(html, /每一小时/);
  assert.match(html, /工资条能核对/);
  assert.match(html, /免费开始记录/);
  assert.match(html, /9\/1–9\/25 ¥6 买断/);
  assert.match(html, /apple-itunes-app/);
  assert.match(html, /ct=github_home/);
  assert.match(html, /href="\/shift-work"/);
  assert.match(html, /href="\/privacy"/);
  assert.match(html, /href="\/support"/);
  assert.doesNotMatch(html, /18092635599/);
});

test("calculator page exposes local calculation and App Store continuation", async () => {
  const html = await page("/calculator");
  assert.match(html, /工资差额计算器/);
  assert.match(html, /仅在浏览器内计算/);
  assert.match(html, /在 App Store 继续核对/);
  assert.match(html, /分享这个计算器/);
  assert.match(html, /ct=github_calculator/);
  assert.match(html, /常见问题/);
  assert.match(html, /¥6 永久买断/);
  assert.match(html, /复杂规则、完整历史、趋势统计和高级小组件/);
});

test("shift-work landing page exposes high-intent copy and App Store continuation", async () => {
  const html = await page("/shift-work");
  assert.match(html, /倒班工资/);
  assert.match(html, /夜班/);
  assert.match(html, /计件/);
  assert.match(html, /App Store 开始记录/);
  assert.match(html, /先用网页免费试算/);
  assert.match(html, /仅供个人工时与薪资核对参考/);
  assert.match(html, /applicationCategory/);
  assert.match(html, /永久买断/);
});

test("salary-gap landing page exposes wage-difference intent and App Store continuation", async () => {
  const html = await page("/salary-gap");
  assert.match(html, /工资条少发/);
  assert.match(html, /工资差额/);
  assert.match(html, /加班倍率/);
  assert.match(html, /App Store 开始记录/);
  assert.match(html, /先用网页免费算一次/);
  assert.match(html, /applicationCategory/);
  assert.match(html, /年度订阅/);
});

test("night-shift page explains cross-midnight work and continues to the App Store", async () => {
  const html = await page("/night-shift-pay");
  assert.match(html, /夜班工资怎么算/);
  assert.match(html, /跨零点/);
  assert.match(html, /实际起止时间/);
  assert.match(html, /App Store 记录夜班/);
  assert.match(html, /application\/ld\+json/);
  assert.match(html, /劳动合同、单位制度和当地规定/);
});

test("hourly-worker page exposes hourly-pay intent and App Store continuation", async () => {
  const html = await page("/hourly-worker-pay");
  assert.match(html, /小时工工资怎么算/);
  assert.match(html, /实际工作/);
  assert.match(html, /工资条/);
  assert.match(html, /App Store 开始记录/);
  assert.match(html, /github_hourly_worker/);
  assert.match(html, /applicationCategory/);
});

test("overtime-pay page exposes overtime intent and App Store continuation", async () => {
  const html = await page("/overtime-pay");
  assert.match(html, /加班工资怎么算/);
  assert.match(html, /平时、休息日与节假日/);
  assert.match(html, /App Store 开始记录/);
  assert.match(html, /github_overtime_pay/);
  assert.match(html, /applicationCategory/);
});

test("piecework-pay page exposes piecework intent and App Store continuation", async () => {
  const html = await page("/piecework-pay");
  assert.match(html, /计件工资怎么算/);
  assert.match(html, /阶梯单价/);
  assert.match(html, /App Store 开始记录/);
  assert.match(html, /github_piecework_pay/);
  assert.match(html, /applicationCategory/);
});

test("wage-check-app page exposes direct App Store intent and purchase path", async () => {
  const html = await page("/wage-check-app");
  assert.match(html, /工资核对 App/);
  assert.match(html, /免费下载/);
  assert.match(html, /9\/1–9\/25 ¥6 买断/);
  assert.match(html, /工资条/);
  assert.match(html, /github_wage_check_app/);
  assert.match(html, /applicationCategory/);
  assert.match(html, /¥6 永久买断/);
});

test("privacy page matches the local-first and StoreKit data model", async () => {
  const html = await page("/privacy");
  assert.match(html, /不包含广告、第三方分析/);
  assert.match(html, /Apple StoreKit/);
  assert.match(html, /App Group/);
  assert.match(html, /1515939993@qq.com/);
});

test("support page covers paid restoration, data preservation and widget recovery", async () => {
  const html = await page("/support");
  assert.match(html, /恢复购买/);
  assert.match(html, /数据会消失吗/);
  assert.match(html, /桌面小组件没有更新/);
  assert.match(html, /1515939993@qq.com/);
});
