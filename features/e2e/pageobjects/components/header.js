import { isElementPresent } from "../helpers/isElementPresentFunc.js";

class Header {
// Left side

get otherSitesBtn(){
  return $('.header__other-sites.dropdown')
}
get otherSitesTabs(){
  return $$('div.tippy-content a.menu__item')
}
// Center

get forumBtn(){
  return $('a[title="Форум"]')
}
get FAQBtn(){
  return $('a[title="Ответы на часто задаваемые вопросы"]')
}
get mainMenuTabs(){
  return $$('.header-menu__item')
}
async getOtherMainMenuTabs(){
  await $('.header-menu__item:last-of-type').click()
  return $$('.menu.header-dropdown a')
}

// Right side

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
  get changeColorThemeBtn(){
    return $('.header-right-menu__item.dropdown.header-button')
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
   async navigateToOtherSite(site){
  
      await this.otherSitesBtn.waitForClickable();
      await this.otherSitesBtn.click();

      if(site === 'RanobeLib'){
        await this.otherSitesTabs[0].click()
      } else if(site === 'AnimeLib'){
        await this.otherSitesTabs[1].click()
      }

   }
}

const header = new Header()

export { header }