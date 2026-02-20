const { chromium } = require("playwright");

( async() => {
    const browser = await chromium.launch({
        headless: false, args:['--start-maximized']
    });

});

const {test, expect} = require ('@playwright/test');

test("Launch Chromium and open the webpage of the Playwright", async({page}) =>
{
    await page.waitForLoadState('networkidle');
    await page.goto('https://demoqa.com/automation-practice-form');
    await expect(page).toHaveURL("https://demoqa.com/automation-practice-form");
    await page.getByRole('heading', {name: 'Practice Form'}).click();
    console.log('Practice.. Heading Verified');
    await expect(page.getByRole('heading', {name: 'Student Registration Form'})).toBeVisible();
    console.log('Student.. Heading Verified');
    await page.waitForTimeout(5000);
    await expect(page.getByRole('placeholder', {name: 'First Name'})).toBeVisible();
    console.log('placeholder tested successfully');
});