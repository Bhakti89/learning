import {test, expect} from '@playwright/test';

test('practice test', async({page}) => 
{
    await page.goto('https://github.com/microsoft/playwright/stargazers');
    //await page.waitForLoadState('networkidle');
    await page.waitForURL('https://github.com/microsoft/playwright/stargazers');
    await page.locator('h1.Subhead-heading.Subhead-heading--large');
    await expect(page.locator('h1.Subhead-heading.Subhead-heading--large')).toContainText('Stargazers');
    console.log('Expected Result');
});