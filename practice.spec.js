import { test, expect } from '@playwright/test';

test ('Practice session', async({page}) =>
{
    //await page.waitForLoadState('networkidle');
    await page.goto('https://playwright.dev/');
    await expect(page).toHaveTitle(/Playwright/);
    await page.getByRole('link', {name: 'Get started'}).click();
    await expect(page).toHaveURL(/docs\/intro/);
    //await page.getByRole('heading', {name: 'Installation'}).locator('h1').is();
    //await expect(page).locator('h1', {hasText: 'Installation'}).toBeVisible();
    await page.getByRole('heading', {name: 'Installation'}).locator('h1').isVisible();
    //await expect(page).locator('h1', {hasText: 'Installation'}).tobeVisible();
});






























