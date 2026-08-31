import { test, expect } from '@playwright/test';

test('home page loads', async ({ page }) => {
  await page.goto('/');
  const title = page.title();
  expect(title).toContain('Syntex Technologies');
});

test('language selector changes locale', async ({ page }) => {
  await page.goto('/en');
  await page.selectOption('select[aria-label="Language"]', 'Spanish');
  await expect(page).toHaveURL(/.*\/es\/.*/);
});