// most common import package

//import { test, expect } from '@playwright/test';

// core playwwright import package

//const {test, expect} = require ('@playwright/test');

//import {test, expect }  async() => {


/*});

    //page.goto('https:playwright.dev/');
    await Page.goto('https://playwright.dev/');
    await expect(Page).toHaveText('star')


 });*/

//import the package
import {test, expect} from '@playwright/test';

test('my first test', async({page}) => {
    await page.goto('https://playwright.dev/');
    // wait for network to settle so dynamic content is loaded
    await page.waitForLoadState('networkidle');
    await expect(page).toHaveTitle(/Playwright/);
    page.pause();
    //for the github star button
    //await expect(page.getByRole('link', {name:'Star'})).toBeVisible();
    //click on the github star button
    await page.getByRole("link", {name: 'Star microsoft/playwright on'}).click();
    //this is the stargazer link
    await expect(page).waitForURL(/\/https:\/\/github.com\/microsoft\/playwright\/stargazers/);
    console.log('found the star link');
});