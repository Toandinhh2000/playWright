import { test, expect } from '@playwright/test';

test('Truy cập trang và kiểm tra tiêu đề', async ({ page }) => {
  await page.goto('https://example.com');
  await expect(page).toHaveTitle(/Example/);
});
