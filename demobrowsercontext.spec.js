import { test, expect } from '@playwright/test';
 
test('open browser and navigate to the url', async({page}) =>
    {
        await page.browser().newContext();
        await page.goto('https:///playwright.dev/');
        await page.getByRole('heading', {name:'Playwright'}).click();
        console.log('Test passed');
    });