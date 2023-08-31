import { Then } from '@wdio/cucumber-framework';
import { expect } from 'chai';
import loginPage from '../pageobjects/login.page.js';
import { mainPage } from '../pageobjects/mainPage.js';
import { header } from '../pageobjects/components/header.js';
import { mangaDetailsPage } from '../pageobjects/mangaDetails.page.js';
import { newsPage } from '../pageobjects/newsPage.js';
import { searchWindow } from '../pageobjects/components/searchWindow.js';
import { isElementPresent } from '../pageobjects/helpers/isElementPresentFunc.js';
import { myProfilePage } from '../pageobjects/myProfile.page.js';

Then(/^I expect (login|search) error message text to be "(.*)"$/, async (flow, errorMsg) => {
  let actualResult;
  if (flow === 'login') {
    actualResult = await loginPage.loginErrorMsg;
  } else if (flow === 'search') {
    actualResult = await searchWindow.searchErrorMsg;
  }
  await expect(actualResult).to.equal(errorMsg);
});

Then(/^I expect to be logged in$/, async () => {
  expect(await header.checkIsLoggedIn()).to.be.true;
});
Then(/^I expect user to be logged out of the account$/, async () => {
  expect(await header.checkIsLoggedIn()).to.be.false;
});
Then(/^I expect (.*)? ?site url to contain text: (.*)$/, async (domain, text) => {
  await expect(await browser.getUrl()).to.have.string(text);
});
Then(/^I expect page title to contain (.*)$/, async function (title) {
  let expectedTitle;
  if (title === 'selected manga name') {
    const world = this;
    expectedTitle = world.mangaName;
  } else {
    expectedTitle = title;
  }
  expect(await mangaDetailsPage.mangaName).to.contain(expectedTitle);
});
Then(/^I expect page title to be "(.*)"$/, async (expectedTitle) => {
  let actualTitle;
  if (expectedTitle.toLowerCase() === 'новости') {
    actualTitle = await newsPage.newsPageTitle.getText();
  }
  expect(actualTitle.toLowerCase()).to.be.string(expectedTitle.toLowerCase());
});
Then(/^I expect background color to be (dark|light)$/, async (backgroundColor) => {
  await expect(await $('html').getAttribute('data-mode')).to.be.equal(backgroundColor);
});

Then(/^I expect Main Menu to contain element: (.*)$/, async (tab) => {
  const mainMenuTabsArray = await header.mainMenuTabs;
  const otherMainMenuTabsArray = await header.getOtherMainMenuTabs();

  const mainMenuTabs = [];

  for (let i = 0; i < mainMenuTabsArray.length - 1; i++) {
    const tabText = await mainMenuTabsArray[i].getText();
    await mainMenuTabs.push(tabText.toLowerCase());
  }
  for (let i = 0; i < otherMainMenuTabsArray.length; i++) {
    const tabText = await otherMainMenuTabsArray[i].getText();
    await mainMenuTabs.push(tabText.toLowerCase());
  }
  await expect(mainMenuTabs).to.contain(tab.toLowerCase());
});

Then(/^I expect Main Page to contain section: (.*)$/, async (section) => {
  const centerSectionTitles = await mainPage.getCenterSectionsTitlesText();
  const centerSectionTitlesLowerCase = [];
  for (let i = 0; i < centerSectionTitles.length; i++) {
    centerSectionTitlesLowerCase.push(centerSectionTitles[i].toLowerCase());
  }
  expect(centerSectionTitlesLowerCase).to.contain(section.toLowerCase());
});
Then(/^I expect element (.*) to (be|not be) displayed$/, async (element, isDisplayed) => {
  if (isDisplayed === 'be') {
    expect(await $(element).isClickable()).to.be.true;
  } else {
    expect(await $(element).isClickable()).to.be.false;
  }
});
Then(/^I expect '(.*)' element placeholder to (equal|contain): '(.*)'$/, async (selector, typeOfComparison, placeholderText) => {
  $(selector).waitForClickable();
  if (typeOfComparison === 'equal') {
    expect(await $(selector).getAttribute('placeholder')).to.equal(placeholderText);
  } else {
    expect(await $(selector).getAttribute('placeholder')).to.contain(placeholderText);
  }
});
Then(/^I expect Reader mode page to open$/, async () => {
  expect(await isElementPresent('.reader-view')).to.be.true;
});
Then(/^I expect manga to be added to (.*) list$/, async function (nameOfCollection) {
  const world = this;
  const listOfTitlesInCollection = await myProfilePage.getListOfTitlesInCollection(nameOfCollection);
  await expect(listOfTitlesInCollection).to.contain(world.mangaTitle);
});
Then(/^I expect element (.*) to have attribute (.*) with value (.*)$/, async (element, attribute, value) => {
  const attributeValue = await $(element).getAttribute(attribute);
  await expect(await attributeValue).to.contain(value);
});
Then(/^I expect votes count to go (up|down) by 1$/, async function (vote) {
  const world = this;
  const actualVotes = Number(world.votesCountAfter);
  let expectedVotes;
  if (vote === 'up') {
    expectedVotes = Number(world.votesCountBefore) + 1;
  } else {
    expectedVotes = Number(world.votesCountBefore) - 1;
  }
  await expect(actualVotes).to.be.equal(expectedVotes);
});
Then(/^I expect comment with text "(.*)" to (be|not be) displayed$/, async (text, isDisplayed) => {
  await browser.pause(1000); 
  await mangaDetailsPage.commentsInputFolded.waitForClickable();
  const comment = await mangaDetailsPage.findCommentByText(text);

  if (isDisplayed === 'be') {
    await expect(await comment.index).to.not.be.null;
  } else {
    await expect(await comment.index).to.be.null;
  }
});
