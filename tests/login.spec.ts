import { test, expect } from '@playwright/test';

test('Đăng nhập thành công', async ({ page }) => {
  await page.goto('https://your-app.com/login');

  await page.fill('input[name="email"]', 'test@example.com');
  await page.fill('input[name="password"]', 'yourPassword');
  await page.click('button[type="submit"]');

  // Kiểm tra đăng nhập thành công
  await expect(page).toHaveURL(/dashboard/);
});
