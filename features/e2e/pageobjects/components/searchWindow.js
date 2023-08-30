import { header } from './header.js';

class SearchWindow {
  get searchEntry() {
    return $('.search__input');
  }

  get searchByAuthorBtn() {
    return $('[data-type = "author"]');
  }

  get searchByPublisherBtn() {
    return $('[data-type = "publisher"]');
  }

  get searchByTranslatorBtn() {
    return $('[data-type = "team"]');
  }

  get searchByUserBtn() {
    return $('[data-type = "user"]');
  }

  get searchResults() {
    return $('.search__suggestions-wrap');
  }

  get searchError() {
    return $('.autocomplete__empty');
  }

  get searchErrorMsg() {
    return this.searchError.getText();
  }

  async search(searchEntry, searchBy) {
    await header.searchBtn.click();
    this.searchEntry.waitForClickable();

    switch (searchBy) {
      case 'person':
        await this.searchByAuthorBtn().click;
        break;
      case 'publisher':
        await this.searchByPublisherBtn().click;
        break;
      case 'translator':
        await this.searchByTranslatorBtn().click;
        break;
      case 'user':
        await this.searchByUserBtn().click;
        break;
    }
    await this.searchEntry.setValue(searchEntry);
    await this.searchResults.waitForClickable();
  }
}

const searchWindow = new SearchWindow();
export { searchWindow };
