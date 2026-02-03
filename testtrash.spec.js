/*import {test, expect} from '@playwright/test';

test('Practice Test', async({page}) =>
{
    await page.goto('https://github.com/microsoft/playwright/stargazers');
    await page.waitForLoadState('networkidle');
    await page.locator('Subhead-heading Subhead-heading--large');
    await expect(page.locator('h1.Subhead-heading.Subhead-heading--large')).toContainText('Stargazers');
    console.log('Expected Results Achieved');
});


/*import {test, expect} from '@playwright/test';

test('Trash Test', async({page}) => 
{
    //await page.goto('https://playwright.dev/');
    //await expect(page).toHaveURL('https://playwright.dev/');
    //console.log('URL matched successfully');
    //await page.waitForLoadState('networkidle');
    //add to the code here to return to the same page here
    
    //await page.goto('https://playwright.dev/');
    await page.goto('https://github.com/microsoft/playwright/stargazers');
    await page.waitForURL('https://github.com/microsoft/playwright/stargazers');
    await page.waitForLoadState('networkidle');
    await expect(page.locator('Subhead-heading.Subhead-heading--large').toBeVisible());
    await expect(page.locator('h1.Subhead-heading.Subhead-heading--large').toContainText('Stargazers'));
    console.log('Expected outcome achieved');
});*/


import{test, expect} from '@playwright/test';

test('practice test', async({page}) =>
{
    
    await page.goto('https://github.com/microsoft/playwright/stargazers');
    await page.waitForLoadState('networkidle');
    await page.locator('Subhead-heading.Subhead-heading--large').toBeVisible();
    await expect(page.locator('h1.Subhead-heading.Subhead-heading--large')).toContainText('Stargazers');
    console.log('Expected Result');
});