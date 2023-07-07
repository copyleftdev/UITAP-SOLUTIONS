import {test, expect} from '@playwright/test';
import { UITAP_LOCS,loadDelayPage} from '../locators/uITapLocators';


test('ajax', async ({page}) => {
    await page.goto(UITAP_LOCS.ajaxDataPath);
    await page.getByRole(...loadDelayPage.ajaxDataButton).click();
    await page.getByText('Data loaded with AJAX get request.').waitFor();
    
});