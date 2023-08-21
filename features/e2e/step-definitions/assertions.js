import { Then } from "@wdio/cucumber-framework";
// import { expect, $ } from '@wdio/globals';
import { expect } from 'chai';
import loginPage from "../pageobjects/login.page.js";

Then(/^I expect error message text to be "(.*)"$/, async(errorMsg)=>{
    await expect(await loginPage.loginErrorMsg).to.equal(errorMsg)
})