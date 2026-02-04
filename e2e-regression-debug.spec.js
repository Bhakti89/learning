import { test, expect } from '@playwright/test';

test('E2E basic regression – happy path (with debugging)', async ({ page }) => {

  // -----------------------------
  // Start application
  // -----------------------------
  await page.goto('https://instabraindevelopment.instabrain-dev.io/');

  await page.locator('#hero-cta-select').selectOption('insta-term');

  // -----------------------------
  // State selection
  // -----------------------------
  await page.locator('div').filter({ hasText: /^Select your state$/ }).first().click();
  await page
    .locator('.stateQuestionStyles_stateItem__wXbDC')
    .filter({ hasText: /^California$/ })
    .click();

  await page.locator('.MuiBackdrop-root').waitFor({ state: 'hidden' });
  await page.getByRole('button', { name: 'Next' }).click();

  // -----------------------------
  // Age
  // -----------------------------
  await page.getByRole('spinbutton').fill('27');
  await page.getByRole('button', { name: 'Next' }).click();

  // -----------------------------
  // Gender
  // -----------------------------
  await page.locator('div').filter({ hasText: /^Female$/ }).first().click();
  await page.getByRole('button', { name: 'Next' }).click();
  
  // -----------------------------
  // Smoker (with enhanced debugging)
  // -----------------------------
  console.log('Clicking No for smoker question...');
  await page.locator('div').filter({ hasText: /^No$/ }).first().click();
  
  // Debug: Check if Next button exists and its state
  const nextButton = page.getByRole('button', { name: 'Next' });
  console.log('Waiting for Next button to be visible...');
  
  try {
    // Wait for button to be visible
    await nextButton.waitFor({ state: 'visible', timeout: 10000 });
    
    // Check if button is enabled
    const isEnabled = await nextButton.isEnabled();
    console.log('Next button enabled:', isEnabled);
    
    // If disabled, wait a bit longer for it to become enabled
    if (!isEnabled) {
      console.log('Button is disabled, waiting for it to be enabled...');
      await page.waitForFunction(() => {
        const btn = document.querySelector('button[name="Next"]') || 
                   Array.from(document.querySelectorAll('button')).find(b => b.textContent?.includes('Next'));
        return btn && !btn.disabled;
      }, { timeout: 15000 });
    }
    
    // Brief pause for any animations
    await page.waitForTimeout(500);
    
    console.log('Clicking Next button...');
    await nextButton.click();
    
  } catch (error) {
    console.log('Error with Next button, trying alternative approaches...');
    
    // Alternative 1: Try to find Next button by text content
    try {
      await page.locator('button:has-text("Next")').click({ timeout: 5000 });
    } catch (e) {
      // Alternative 2: Try CSS selector
      await page.locator('button[type="submit"]').click({ timeout: 5000 });
    }
  }

  // -----------------------------
  // Health
  // -----------------------------
  await page.locator('div').filter({ hasText: /^Excellent/ }).first().click();
  await page.getByRole('button', { name: 'Next' }).click();

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
  await page.locator('#coverage-basics-container').getByText('$').click();
  await page.getByRole('option', { name: '$925,000' }).click();

  await page.locator('#coverage-basics-container').getByText('Years').click();
  await page.getByRole('option', { name: '30 Years' }).click();

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