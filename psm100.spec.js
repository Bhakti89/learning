import{test,expect} from '@playwright/test';

test('Validate the accept button', async({page}) =>
{
  await page.goto('https://www.baps.org/PramukhSwamiMaharaj/PSM-100-Shatabadi-Mahotsav.aspx#');
  await expect(page).toHaveTitle(' Pramukh Swami Maharaj Centenary Celebrations, Ahmedabad, India')
  await page.getByRole('button', )                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    });












// >>>>> 1st trial 
// 
/*import{test, expect } from '@playwright/test';

test('verify title', async ({ page }) => {
  await page.goto('https://www.baps.org/PramukhSwamiMaharaj/PSM-100-Shatabadi-Mahotsav.aspx#');
  await expect(page).toHaveTitle(' Pramukh Swami Maharaj Centenary Celebrations, Ahmedabad, India');
  await page.locator('btn-sm btn-danger gtm_I_accept');
  await page.waitForLoadState('networkidle');
  await expect(page.locator('btn-sm.btn-danger.gtm_I_accept')).toBeVisible();
  await page.locator('btn-sm.btn-danger.gtm_I_accept').click();
  //const getStarted = page.getByRole('button', {name: 'I Accept'});
  //await expect(page.getStarted).click();
});*/
/*

// >>>>> 2nd trial
import{test, expect} from '@playwright/test';

test('test validations', async({page}) => 
{
  await page.goto('https://www.baps.org/PramukhSwamiMaharaj/PSM-100-Shatabadi-Mahotsav.aspx#');
  await expect(page).toHaveTitle(' Pramukh Swami Maharaj Centenary Celebrations, Ahmedabad, India');
  await page.locator('.btn-sm.btn-danger.gtm_I_accept.');
  await page.waitForURL('https://www.baps.org/PramukhSwamiMaharaj/PSM-100-Shatabadi-Mahotsav.aspx#'); 
  await expect(page.locator('.btn-sm.btn-danger.gtm_I_accept.')).toBeVisible();
  await page.locator('.btn-sm.btn-danger.gtm_I_accept.').click();
  console.log('success');
});*/