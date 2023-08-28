import { BasePage } from "./basePage.js"
import { header } from "./components/header.js"

class MyProfilePage extends BasePage{
    get listOfTitles(){
        return $$('.bookmark-item__name span:first-child')
    }
    get listOfTitlesContainer(){
        return $('.bookmark__list.paper')
    }
    get myAllCollectionBtn(){
        return $('.bookmark-menu div:nth-child(1)')
    }
    get myReadingCollectionBtn(){
        return $('.bookmark-menu div:nth-child(2)')
    }
    get myPlanCollectionBtn(){
        return $('.bookmark-menu div:nth-child(3)')
    }
    get myLeftCollectionBtn(){
        return $('.bookmark-menu div:nth-child(4)')
    }
    get myFinishedCollectionBtn(){
        return $('.bookmark-menu div:nth-child(5)')
    }
    get myFavoriteCollectionBtn(){
        return $('.bookmark-menu div:nth-child(6)')
    }
    async getListOfTitlesInCollection(nameOfCollection){
        let collectionToOpen
        
        if(nameOfCollection === 'Читаю'){
            collectionToOpen = await this.myReadingCollectionBtn
        } else if(nameOfCollection === 'Все тайтлы'){
            collectionToOpen = await this.myAllCollectionBtn
        } else if(nameOfCollection === 'В планах'){
            collectionToOpen = await this.myPlanCollectionBtn
        } else if(nameOfCollection === 'Брошено'){
            collectionToOpen =  await this.myLeftCollectionBtn
        } else if(nameOfCollection === 'Прочитано'){
            collectionToOpen = await this.myFinishedCollectionBtn
        } else if(nameOfCollection === 'Любимые'){
            collectionToOpen = await this.myFavoriteCollectionBtn
        }

        
        await collectionToOpen.click()
        let listOfTitlesInCollection = []

        for(let i =0; i< await this.listOfTitles.length; i++){
            await listOfTitlesInCollection.push(await this.listOfTitles[i].getText())
        }

        return listOfTitlesInCollection
    }
    async navigateToMyProfile(){
        await header.profileIconElement.click()
        await header.myProfileBtn.click()
    }
}

const myProfilePage = new MyProfilePage()

export {myProfilePage}