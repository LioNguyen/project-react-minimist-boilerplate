import { test, expect } from "@playwright/test";

test.describe("Button", () => {
  test("Should display content pass to it", async ({ page }) => {
    await page.goto("http://127.0.0.1:5173/");

    const btnList = await page.locator("button").allInnerTexts();
    for (const btn of btnList) {
      const btnLocator = await page.locator("button", { hasText: btn });
      await btnLocator.waitFor();
      await expect(btnLocator).toHaveText(btn);
    }
  });
});
