const { chromium } = require("playwright");
const { test, expect } = require("@playwright/test");

test("should launch Chromium and navigate to playwright.dev", async ({
  page,
}) => {
  // Navigate to the desired URL
  await page.goto("https://www.playwright.dev/");

  // Take a screenshot
  await page.screenshot({ path: "playwright.dev.png" });
  console.log("Chromium launched successfully and screenshot taken!");

  // Add an assertion: Verify the page title
  await expect(page).toHaveTitle(
    /Fast and reliable end-to-end testing for modern web apps | Playwright/,
  );
});

// Comment below code for now
// (async () => {

//   const browser = await chromium.launch({
//     headless: false
//   });

// const page = await browser.newPage();
// await page.goto("https://playwright.dev");
// await page.screenshot({'path':'playwright.dev.png'});
// console.log('Chromium launched successfully!')
// await browser.close();

// })();
