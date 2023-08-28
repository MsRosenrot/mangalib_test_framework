import { Given, When } from '@wdio/cucumber-framework';
import { $ } from '@wdio/globals';
import { mainPage } from '../pageobjects/mainPage.js';
import { header } from '../pageobjects/components/header.js';
import loginPage from '../pageobjects/login.page.js';
import { users, devices } from '../pageobjects/helpers/constants.js';
import { searchWindow } from '../pageobjects/components/searchWindow.js';
import { mangaDetailsPage } from '../pageobjects/mangaDetails.page.js';
import { readMangaPage } from '../pageobjects/readManga.page.js';
import { myProfilePage } from '../pageobjects/myProfile.page.js';

Given(/^I navigate to (.*)$/, async (url) => {
    await mainPage.navigate(url);
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
    await mainPage.clickPageButton(header.enterAccountBtn)
    if(credentials === 'valid'){
        await loginPage.login(users.validLogin, users.validPassword)
    } else {
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
Given(/^I search for (.*): (.*)$/, async(searchBy, searchEntry)=>{
    await searchWindow.search(searchEntry,searchBy)
})
Given(/^I click '(.*)' element$/, async(selector)=>{
    await mainPage.clickPageButton($(selector))
})
Given(/^I start reading title (.*)$/, async(url)=>{
    await mangaDetailsPage.startReadingManga(url)
})
When(/^I navigate chapters: (\d) chapters (forward|back)$/, async(numOfChapters, forwardOrBack)=>{
    for(let i=1; i<=numOfChapters; i++){
        await readMangaPage.navigateChapter(forwardOrBack)
    }
})
When(/^I add manga to (.*) list$/, async function(nameOfCollection){
    const world = this
    world.mangaTitle = await mangaDetailsPage.mangaName
    await mangaDetailsPage.addMangaToList(nameOfCollection)
})
When(/^I go to My Profile page$/, async()=>{
    await myProfilePage.navigateToMyProfile()
    await myProfilePage.listOfTitlesContainer.waitForClickable()
})
When(/^I rate title (\d\d?) points$/, async(points)=>{
    await mangaDetailsPage.rateManga(points)
})
When(/^I (upvote|downvote) related title$/, async function (vote){
    const world = this
    world.votesCountBefore = await mangaDetailsPage.votesCountSimilar
    if(vote === 'upvote'){
        await mangaDetailsPage.upvoteSimilarBtn.click()
    } else {
        await mangaDetailsPage.downvoteSimilarBtn.click()
    }
    await browser.pause(1000) //Cannot find other way to wait until number changes
    world.votesCountAfter = await mangaDetailsPage.votesCountSimilar

})
When(/^I go to (.*) section on manga details page$/, async(section)=>{
    if(section === 'Comments'){
        await mangaDetailsPage.clickPageButton(mangaDetailsPage.commentsBtn)
    }
})
When(/^I (add|delete) comment with text "(.*)"$/, async function(action, text){
    if(await mangaDetailsPage.confirmReadRulesCheckbox.isClickable()){
        await mangaDetailsPage.confirmRulesRead()
    }
    if(action === 'add'){
        await mangaDetailsPage.addComment(text)
    } else {
       await mangaDetailsPage.deleteCommentByText(text)
    }
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

