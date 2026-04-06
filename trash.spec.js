import { test, expect } from '@playwright/test';

test ('open the browser and verify the title', async({page}) => 
{
	//open browser and go to the url or page
	await page.goto('https://playwright.dev/');
	console.log('Actual page title:', await page.title());

	const actualTitle = await page.title();

	//verify the title of the page 
	//await expect(page).toHaveTitle(/ Playwright enables reliable end-to-end testing for modern web apps./);

});
















































/*

import{ test, expect } from '@playwright/test';

test ('Practice Test', async({page}) => 
{
	// open browser
	await page.goto('https://playwright.dev/');
	
	//verify title
	await expect(page).toHaveTitle(/Playwright/);

    //check the link 'API' and click on it
    await page.getByRole('link', {name: 'API'}).isVisible();
	//await page.getByRole('link', {name: 'API'}).click();

	//find the locator and verify the link 
	await page.getByRole('link', {name: 'Get started'}).click();
	await expect(page).toHaveURL(/docs\/intro$/);
	
	//verify the heading 'Installation' in the '/docs/into/' page
	await expect(page.getByRole('heading', {name: 'Installation'})).toBeVisible();
	
}); */