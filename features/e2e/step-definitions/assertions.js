import { Then } from "@wdio/cucumber-framework";
import { expect } from 'chai';
import loginPage from "../pageobjects/login.page.js";
import { mainPage } from "../pageobjects/mainPage.js";
import { isElementPresent } from "../pageobjects/helpers/isElementPresentFunc.js";
import { header } from "../pageobjects/components/header.js";

Then(/^I expect error message text to be "(.*)"$/, async(errorMsg)=>{
    await expect(await loginPage.loginErrorMsg).to.equal(errorMsg)
})
Then(/^I expect to be logged in$/, async ()=>{
    // mainPage.isElementPresent()
    header.checkIsLoggedIn()
})
Then(/^I expect user to be logged out of the account$/, async()=>{
     header.checkIsLoggedOut()
})