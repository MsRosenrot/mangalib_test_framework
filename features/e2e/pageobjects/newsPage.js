import { BasePage } from "./basePage.js";

class NewsPage extends BasePage{
    get newsPageTitle(){
        return $('h1')
    }
}

let newsPage = new NewsPage()
export {newsPage}