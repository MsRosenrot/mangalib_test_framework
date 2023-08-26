import { BasePage } from "./basePage.js";
import { mainPage } from "./mainPage.js";

class MangaDetailsPage extends BasePage{
    get mangaPageTitle(){
        return $('.media-name__main')
    }
    get mangaName(){
        return this.mangaPageTitle.getText()
    }
    get startReadingBtn(){
        return $('.media-sidebar .button_primary')
    }
    async startReadingManga(url){
        await mangaDetailsPage.navigate(url);
        this.startReadingBtn.waitForClickable()
        await this.startReadingBtn.click()
    }
}

let mangaDetailsPage = new MangaDetailsPage()
export {mangaDetailsPage}