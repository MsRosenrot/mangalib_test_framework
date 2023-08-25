import { BasePage } from "./basePage.js";

class MangaDetailsPage extends BasePage{
    get mangaPageTitle(){
        return $('.media-name__main')
    }
    get mangaName(){
        return this.mangaPageTitle.getText()
    }
}

let mangaDetailsPage = new MangaDetailsPage()
export {mangaDetailsPage}