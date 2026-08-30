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
  assert.match(html, /apple-itunes-app/);
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
  assert.match(html, /常见问题/);
  assert.match(html, /复杂规则、完整历史、趋势统计和高级小组件/);
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
