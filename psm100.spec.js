import { test, expect } from '@playwright/test';

test('Verify logo and the website title or url', async ({page}) =>
{
  await page.goto('https://psm100.org/');
  await expect(page).toHaveURL('https://psm100.org/');
  const logo = page.locator('header img');
  await expect(logo).toBeVisible();
  await expect(logo).toHaveScreenshot('psm100-logo.png');
  await expect(page).toHaveTitle('PSM100 – Pramukh Swami Maharaj Shatabdi Mahotsav');
  console.log('success');
});