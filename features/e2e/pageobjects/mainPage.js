import { BasePage } from "./basePage.js";
import { isElementPresent } from "./helpers/isElementPresentFunc.js";

class MainPage extends BasePage{
get popularMangaList(){
   return $$('.hot-media-item__name.link-default')
}
get openAllNewsBtn(){
   return $('[href = "https://mangalib.me/news"]')
}
}
const mainPage = new MainPage()

export { mainPage }