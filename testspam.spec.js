import { test, expect} from '@playwright/test';

// 1. open the browser and verify it's title
test ('my test name here',  async({page}) => 
{
    await page.goto('https://playwright.dev/');
    await expect(page).toHaveTitle(/Playwright/);
    console.log('Title is ok');

// 2. Verify click action > locator + click
    await page.click('text=Get Started');
    console.log('clicked on Get Started Link');   
});