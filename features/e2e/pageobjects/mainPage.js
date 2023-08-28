import { BasePage } from "./basePage.js";

class MainPage extends BasePage{
get popularMangaList(){
   return $$('.hot-media-item__name.link-default')
}
get openAllNewsBtn(){
   return $('[href = "https://mangalib.me/news"]')
}
get subtitles(){
   return $$('h2')
}
get newChaptersSectionTitle(){
   return $('.section__header-title')
}
get sideMenu(){
   return $('.aside__content')
}
async getCenterSectionsTitlesText(){
   let centerSectionsTitles = [await this.newChaptersSectionTitle.getText()]
   let titlesToAdd = await this.subtitles.length
   for(let i=0; i < titlesToAdd; i++){
      const subtitleText = await this.subtitles[i].getText()
      await centerSectionsTitles.push(subtitleText)
   }
   return centerSectionsTitles

}
}
const mainPage = new MainPage()

export { mainPage }