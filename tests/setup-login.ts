import { chromium } from '@playwright/test';

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  await page.goto('https://your-app.com/login');
  await page.fill('input[name="email"]', 'test@example.com');
  await page.fill('input[name="password"]', 'yourPassword');
  await page.click('button[type="submit"]');

  await page.waitForURL('**/dashboard');

  // Lưu trạng thái session
  await page.context().storageState({ path: 'storage/login.json' });
  await browser.close();
})();
