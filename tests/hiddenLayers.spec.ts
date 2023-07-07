import {test, expect} from '@playwright/test';
import { UITAP_LOCS } from '../locators/uITapLocators';

test('hidden layers', async ({ page }) => {
  await page.goto(UITAP_LOCS.hiddenLayerPath);
  // Check if the button is visible before clicking
  if (await page.locator('#greenButton').isVisible()) {
    await page.locator('#greenButton').click();
  }
});
