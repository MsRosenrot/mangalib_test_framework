import { Given, When, Then } from '@wdio/cucumber-framework';
import { expect, $ } from '@wdio/globals';
import { mainPage } from '../pageobjects/mainPage.js';
import { header } from '../pageobjects/components/header.js';
import loginPage from '../pageobjects/login.page.js';

Given(/^I navigate to (.*)$/, async (url) => {
    await mainPage.navigate(url);
        // await browser.waitUntil(() => browser.execute(() => document.readyState === 'complete'));
})

Given(/^I login with login:(.*) and password:(.*)$/, async(login, password)=>{
    await mainPage.clickPageButton(header.enterAccountBtn)
    await loginPage.login(login, password)
})
































// import LoginPage from '../pageobjects/login.page.js';
// import SecurePage from '../pageobjects/secure.page.js';

// const pages = {
//     login: LoginPage
// }

// Given(/^I am on the (\w+) page$/, async (page) => {
//     await pages[page].open()
// });

// When(/^I login with (\w+) and (.+)$/, async (username, password) => {
//     await LoginPage.login(username, password)
// });

// Then(/^I should see a flash message saying (.*)$/, async (message) => {
//     await expect(SecurePage.flashAlert).toBeExisting();
//     await expect(SecurePage.flashAlert).toHaveTextContaining(message);
// });

