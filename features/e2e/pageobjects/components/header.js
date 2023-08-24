import { isElementPresent } from "../helpers/isElementPresentFunc.js";

class Header {
  get profileIconElement(){
    return $('img.header-right-menu__avatar')
 }
 get profileIconSelector(){
   return 'img.header-right-menu__avatar'
 }
    get enterAccountBtn(){
        return $('.button.header__sign-in')
    }
    get enterAccountBtnSelector(){
      return '.button.header__sign-in'
  }
    get logoutBtn(){
        return $('#logout-button')
      }
    async logout(){
        await this.logoutBtn.waitForDisplayed();
        await this.logoutBtn.click();
      }
    async checkIsLoggedOut(){
        await isElementPresent(this.enterAccountBtnSelector)
     }
     async checkIsLoggedIn(){
      isElementPresent(this.profileIconSelector)
   }
}

const header = new Header()

export { header }