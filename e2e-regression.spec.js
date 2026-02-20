console.log('RUNNING FILE:', __filename);

import { page } from '@playwright/test';

export async function waitForMui(page)
{
    const backdrop = page.locator('.MuiBackdrop-root');
    if (await backdrop.count()) 
    {
        await backdrop.waitFor({ state: 'hidden' });
    }
}

import { test, expect } from '@playwright/test';

test('E2E basic regression – happy path', async ({ page }) => {

  // -----------------------------
  // Start application
  // -----------------------------
  await page.goto('https://instabraindevelopment.instabrainstage.io/');

  await page.locator('#hero-cta-select').selectOption('insta-term');

  // -----------------------------
  // State selection
  // -----------------------------
  await waitForMui(page);
  await page.locator('div').filter({ hasText: /^Select your state$/ }).first().click();
  await page
    .locator('.stateQuestionStyles_stateItem__wXbDC')
    .filter({ hasText: /^California$/ })
    .click();

  await waitForMui(page);
  await page.getByRole('button', { name: 'Next' }).click();

  // -----------------------------
  // Age
  // -----------------------------
  await page.getByRole('spinbutton').fill('27');
  await page.getByRole('button', { name: 'Next' }).click();

  // -----------------------------
// Gender (auto-advances)
// -----------------------------
// Gender selection (auto-advance screen)
const femaleOption = page
  .locator('.baseOptionQuestionStyles_optionContainer__kszJU')
  .filter({ hasText: 'Female' });

await expect(femaleOption).toBeVisible();
await femaleOption.click();

// Wait for next screen instead of Next button
await expect(
  page.getByText('Do you currently use products containing nicotine?')
).toBeVisible();

  // -----------------------------
// Smoker
// -----------------------------
// Wait for the next step (Smoker question)
await page.getByText('No', { exact: true }).click();

// confirm navigation happened → Health screen
await expect(
  page.getByRole('heading', {
    name: 'How would you rate your health?',
  })
).toBeVisible();

// -----------------------------
// Health (auto-advances to Customize Quote)
// -----------------------------

// Select health option
await page.getByText('Excellent', { exact: true }).click();
// -----------------------------
// Health (auto-advances)
// -----------------------------
const excellentOption = page
  .getByText('Excellent', { exact: true })
  .locator('..');

await expect(excellentOption).toBeVisible();
await excellentOption.click();

// Wait for Customize Your Quote page (paragraph, not heading)
await expect(
  page.getByText('Customize Your Quote', { exact: true })
).toBeVisible();

  // -----------------------------
  // Coverage checkboxes
  // -----------------------------
  const checkboxes = page.getByRole('checkbox');

  await expect(checkboxes.first()).toBeVisible();

  // MUI checkboxes → CLICK (not check)
  await checkboxes.nth(0).click();
  await checkboxes.nth(1).click();
  await checkboxes.nth(2).click();

  await page.getByRole('button', { name: 'Apply Now' }).click();

  // -----------------------------
  // Coverage basics
  // -----------------------------
  //await page.locator('#coverage-basics-container').getByText('$').click();
  const coverageAmount = page.locator('#coverage-basics-container').getByRole('combobox').filter({ hasText: '$' });
  await coverageAmount.click();

  const listbox = page.getByRole('listbox');
  await expect(listbox).toBeVisible();
  await listbox.getByRole('option', {name: '250,000'}).click();

  await page.locator('.MuiBackdrop-root').waitFor({ state: 'hidden' });
  await page.locator('#coverage-basics-container').getByText('Years').click();
  await page.getByRole('option', { name: '10 Years' }).click();

  await page.getByRole('button', { name: 'Apply Now' }).click();

  // -----------------------------
  // Personal details
  // -----------------------------
  await page.locator('input[name*="d733"]').fill('Bhakti');
  await page.locator('input[name*="8aef"]').fill('Gajjar');
  await page.getByRole('button', { name: 'Next' }).click();

  await page.getByRole('textbox').fill('(202) 596-1737');
  await page.getByRole('checkbox', { name: 'controlled' }).check();
  await page.getByRole('button', { name: 'Next' }).click();

  await page.locator('#email_input').fill('testce15@yopmail.com');
  await page.getByRole('button', { name: 'Next' }).click();

  // -----------------------------
  // Health questions
  // -----------------------------
  await page.getByRole('button', { name: 'Continue' }).click();

  await page.getByRole('combobox').click();
  await page.getByRole('option', { name: '5ft. 11in.' }).click();

  await page.getByRole('textbox').fill('160');
  await page.getByRole('button', { name: 'Next' }).click();

  await page.getByRole('button', { name: 'No' }).click();
  await page.getByRole('button', { name: 'Yes' }).click();
  await page.getByRole('button', { name: 'Continue' }).click();

  // -----------------------------
  // Address & identity
  // -----------------------------
  await page.getByRole('combobox', { name: 'Enter Address' }).fill('fountain hills');
  await page.getByRole('option', { name: '12005 N Fountain Hills Blvd,' }).click();
  await page.getByRole('button', { name: 'Next' }).click();

  await page.getByRole('textbox', { name: 'MM/DD/YYYY' }).fill('01/01/1997');
  await page.getByRole('button', { name: 'Next' }).click();

  await page.getByRole('textbox').fill('123456789');
  await page.getByRole('button', { name: 'Next' }).click();

  // -----------------------------
  // Employment & lifestyle
  // -----------------------------
  await page.locator('#asyncautocomplete').fill('quality');
  await page.getByRole('option', { name: 'Quality Assurance Analyst' }).click();

  await page.getByRole('textbox').fill('88000');
  await page.getByRole('button', { name: 'Next' }).click();

  await page.getByRole('checkbox', { name: 'None of the above' }).check();
  await page.getByRole('button', { name: 'Next' }).click();

  // -----------------------------
  // Authorization & payment
  // -----------------------------
  await page.getByRole('checkbox', { name: /I, Bhakti/ }).check();
  await page.getByRole('button', { name: 'Authorize' }).click();
  await page.getByRole('button', { name: 'Confirm' }).click();

  await page.getByText('EFT').click();

  await page.getByRole('textbox', { name: 'Enter Name' }).fill('Bhakti Gajjar');
  await page.getByRole('textbox', { name: 'Enter Routing Number' }).fill('056008849');
  await page.getByRole('textbox', { name: 'Enter Account Number' }).fill('123456789');
});
