import { Page } from '@playwright/test';

export async function takeScreenshot(page: Page, name: string) {
  await page.screenshot({
    path: `evidence/screenshots/${name}.png`
  });
}
