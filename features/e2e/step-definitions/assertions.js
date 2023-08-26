import { Then } from "@wdio/cucumber-framework";
import { expect } from 'chai';
import loginPage from "../pageobjects/login.page.js";
import { mainPage } from "../pageobjects/mainPage.js";
import { header } from "../pageobjects/components/header.js";
import { mangaDetailsPage } from "../pageobjects/mangaDetails.page.js"
import { newsPage } from "../pageobjects/newsPage.js";
import { searchWindow } from "../pageobjects/components/searchWindow.js";


Then(/^I expect (login|search) error message text to be "(.*)"$/, async(flow, errorMsg)=>{
    let actualResult
    if(flow === 'login'){
        actualResult = await loginPage.loginErrorMsg
    } else if(flow === 'search'){
        actualResult = await searchWindow.searchErrorMsg
    }
    await expect(actualResult).to.equal(errorMsg)
    
})

Then(/^I expect to be logged in$/, async ()=>{
    header.checkIsLoggedIn()
})
Then(/^I expect user to be logged out of the account$/, async()=>{
     header.checkIsLoggedOut()
})
Then(/^I expect (.*) site url to contain text: (.*)$/, async(domain, text)=>{
    await expect(await browser.getUrl()).to.have.string(text)
})
Then(/^I expect page title to contain (.*)$/, async function(title){
    let expectedTitle
    if(title === 'selected manga name'){
    const world = this
    expectedTitle = world.mangaName
    } else {
        expectedTitle = title
    }
    expect(await mangaDetailsPage.mangaName).to.contain(expectedTitle)
})
Then(/^I expect page title to be "(.*)"$/, async(expectedTitle)=>{
    let actualTitle
    if(expectedTitle.toLowerCase() === 'новости'){
        actualTitle = await newsPage.newsPageTitle.getText()
    }
    expect(actualTitle.toLowerCase()).to.be.string(expectedTitle.toLowerCase())
})
Then(/^I expect background color to be (dark|light)$/, async(backgroundColor)=>{
            await expect(await $('html').getAttribute('data-mode')).to.be.equal(backgroundColor)
    })

Then(/^I expect Main Menu to contain element: (.*)$/, async(tab)=>{
    
    
    const mainMenuTabsArray = await header.mainMenuTabs
    const otherMainMenuTabsArray = await header.getOtherMainMenuTabs()
   
    const mainMenuTabs = []

    for(let i = 0; i < mainMenuTabsArray.length-1; i++){
        const tabText = await mainMenuTabsArray[i].getText()
        await mainMenuTabs.push(tabText.toLowerCase())

    }
    for(let i = 0; i < otherMainMenuTabsArray.length; i++){
        const tabText = await otherMainMenuTabsArray[i].getText()
        await mainMenuTabs.push(tabText.toLowerCase())
    }
    await expect(mainMenuTabs).to.contain(tab.toLowerCase())
})

Then(/^I expect Main Page to contain section: (.*)$/, async(section)=>{
    const centerSectionTitles = await mainPage.getCenterSectionsTitlesText()
    const centerSectionTitlesLowerCase = []
    for(let i = 0; i < centerSectionTitles.length; i++){
        centerSectionTitlesLowerCase.push(centerSectionTitles[i].toLowerCase())
    }
    expect(centerSectionTitlesLowerCase).to.contain(section.toLowerCase())
})
Then(/^I expect element (.*) to (be|not be) displayed$/, async(element, isDisplayed)=>{
    if(isDisplayed === 'be'){
        expect(await $(element).isClickable()).to.be.true
    } else {
        expect(await $(element).isClickable()).to.be.false
    }
})
Then(/^I expect '(.*)' element placeholder to (equal|contain): '(.*)'$/, async(selector, typeOfComparison, placeholderText)=>{
    $(selector).waitForClickable()
 if(typeOfComparison === 'equal'){
    expect(await $(selector).getAttribute('placeholder')).to.equal(placeholderText)
 } else{
    expect(await $(selector).getAttribute('placeholder')).to.contain(placeholderText)
 }
})