// @ts-check
import { test, expect } from '@playwright/test';

test('Google abre corretamente', async ({ page }) => {
  await page.goto('https://www.google.com');
  await expect(page).toHaveTitle(/Google/);
});

test('Wikipedia carrega', async ({ page }) => {
  await page.goto('https://www.wikipedia.org');
  await expect(page.getByRole('heading', { level: 1 })).toBeVisible();
});
