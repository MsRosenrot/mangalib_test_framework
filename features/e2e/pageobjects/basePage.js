class BasePage{
    async navigate(url){
        await browser.url(url),
        await browser.execute(() => document.readyState === 'complete');
    }
    async clickPageButton(button) {
        await button.waitForDisplayed();
        await button.click();
      }
    
}

export { BasePage }