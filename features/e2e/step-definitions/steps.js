import { Given, When, Then } from '@wdio/cucumber-framework';
import { expect, $ } from '@wdio/globals';
import { mainPage } from '../pageobjects/mainPage.js';
import { header } from '../pageobjects/components/header.js';
import loginPage from '../pageobjects/login.page.js';
import { users, devices } from '../pageobjects/helpers/constants.js';

Given(/^I navigate to (.*)$/, async (url) => {
    await mainPage.navigate(url);
        // await browser.waitUntil(() => browser.execute(() => document.readyState === 'complete'));
})
Given(/^I open site on (mobile|PC|tablet)$/, async(device)=>{
    if(device === 'mobile'){
        browser.setWindowSize(devices.mobile.width, devices.mobile.height)
    } else if(device === 'PC'){
        browser.setWindowSize(devices.PC.width, devices.PC.height)
    } else if(device === 'tablet'){
        browser.setWindowSize(devices.tablet.width, devices.tablet.height)
    }
    
})
Given(/^I navigate at different domain: (RanobeLib|AnimeLib)$/, async(site)=>{
    await header.navigateToOtherSite(site)
})
Given(/^I click main menu tab: (.*)$/, async(tab)=>{
    if(tab === 'Forum'){
        await mainPage.clickPageButton(header.forumBtn)
    } else if(tab === 'FAQ'){
        await mainPage.clickPageButton(header.FAQBtn)
    }
    
})
Given(/^I select Popular Manga poster №(\d)$/, async function(position){
    const world = this
    const mangaToSelect = mainPage.popularMangaList[position]
    world.mangaName = await mangaToSelect.getText()
    await mainPage.clickPageButton(mangaToSelect)
})

Given(/^I login with (valid|invalid) credentials$/, async(credentials)=>{
    if(credentials === 'valid'){
        await mainPage.clickPageButton(header.enterAccountBtn)
        await loginPage.login(users.validLogin, users.validPassword)
    } else {
        await mainPage.clickPageButton(header.enterAccountBtn)
        await loginPage.login(users.invalidLogin, users.invalidPassword)
    }
    
})

Given(/^I open News page from Main Page$/, async()=>{
    await mainPage.clickPageButton(mainPage.openAllNewsBtn)
})
Given(/^I click change color theme button$/, async()=>{
    await mainPage.clickPageButton(header.changeColorThemeBtn)
})

Given(/^I log out$/, async()=>{
    await mainPage.clickPageButton(header.profileIconElement)
    await header.logout()
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

