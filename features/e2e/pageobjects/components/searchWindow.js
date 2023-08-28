import { header } from "./header.js";

class SearchWindow{
    get searchEntry(){
        return $('.search__input')
    }
    get searchByAuthorBtn(){
        return $('[data-type = "author"]')
    }
    get searchByPublisherBtn(){
        return $('[data-type = "publisher"]')
    }
    get searchByTranslatorBtn(){
        return $('[data-type = "team"]')
    }
    get searchByUserBtn(){
        return $('[data-type = "user"]')
    }
    get searchResults(){
        return $('.search__suggestions-wrap')
    }
    get searchErrorMsg(){
        return $('.autocomplete__empty').getText()
    }
    async search(searchEntry,searchBy){
        await header.searchBtn.click()
        this.searchEntry.waitForClickable()
        if(searchBy === 'person'){
            await this.searchByAuthorBtn().click
        } else if (searchBy === 'publisher'){
            await this.searchByPublisherBtn().click
        } else if (searchBy === 'translator'){
            await this.searchByTranslatorBtn().click
        } else if (searchBy === 'user'){
            await this.searchByUserBtn().click
        }
        await this.searchEntry.setValue(searchEntry)
        await this.searchResults.waitForClickable()
       }
}

const searchWindow = new SearchWindow()
export {searchWindow}