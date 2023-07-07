import {test, expect} from '@playwright/test';
import { UITAP_LOCS, loadDelayPage } from '../locators/uITapLocators';


test('Load Delay', async ({ page }) => {
    await page.goto(UITAP_LOCS.loadDelayPath);
    await page.getByRole(...loadDelayPage.buttonAfterDelay).waitFor();
    await page.getByRole(...loadDelayPage.buttonAfterDelay).click();
});