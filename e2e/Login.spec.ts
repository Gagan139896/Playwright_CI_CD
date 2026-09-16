import {test , expect} from '@playwright/test';

test('Login test using Locators', async ({page}) => {
    
    await page.goto('https://pega88internal.crochetech.com/prweb/');
    await page.getByRole('textbox', { name: 'User name' }).fill('CountryHead_4');
    await page.getByRole('textbox', { name: 'Password' }).fill('Install@12345');
    await page.getByRole('button', { name: 'Log in' }).click();

    await expect(page.locator('[data-test-id="20180814100925014850_header"]')).toContainText('PAM');
});