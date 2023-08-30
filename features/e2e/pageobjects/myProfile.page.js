import { BasePage } from './basePage.js';
import { header } from './components/header.js';

class MyProfilePage extends BasePage {
  get listOfTitles() {
    return $$('.bookmark-item__name span:first-child');
  }

  get listOfTitlesContainer() {
    return $('.bookmark__list.paper');
  }

  get myAllCollectionBtn() {
    return $('.bookmark-menu div:nth-child(1)');
  }

  get myReadingCollectionBtn() {
    return $('.bookmark-menu div:nth-child(2)');
  }

  get myPlanCollectionBtn() {
    return $('.bookmark-menu div:nth-child(3)');
  }

  get myLeftCollectionBtn() {
    return $('.bookmark-menu div:nth-child(4)');
  }

  get myFinishedCollectionBtn() {
    return $('.bookmark-menu div:nth-child(5)');
  }

  get myFavoriteCollectionBtn() {
    return $('.bookmark-menu div:nth-child(6)');
  }

  async getListOfTitlesInCollection(nameOfCollection) {
    let collectionToOpen;

    switch (nameOfCollection) {
      case 'Читаю':
        collectionToOpen = await this.myReadingCollectionBtn;
        break;
      case 'Все тайтлы':
        collectionToOpen = await this.myAllCollectionBtn;
        break;
      case 'В планах':
        collectionToOpen = await this.myPlanCollectionBtn;
        break;
      case 'Брошено':
        collectionToOpen = await this.myLeftCollectionBtn;
        break;
      case 'Прочитано':
        collectionToOpen = await this.myFinishedCollectionBtn;
        break;
      case 'Любимые':
        collectionToOpen = await this.myFavoriteCollectionBtn;
        break;
    }
    await collectionToOpen.click();
    const listOfTitlesInCollection = [];

    for (let i = 0; i < await this.listOfTitles.length; i++) {
      await listOfTitlesInCollection.push(await this.listOfTitles[i].getText());
    }

    return listOfTitlesInCollection;
  }

  async navigateToMyProfile() {
    await header.profileIconElement.click();
    await header.myProfileBtn.click();
  }
}

const myProfilePage = new MyProfilePage();

export { myProfilePage };
