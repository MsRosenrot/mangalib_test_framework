import { BasePage } from './basePage.js';

class NewsPage extends BasePage {
  get newsPageTitle() {
    return $('h1');
  }
}

const newsPage = new NewsPage();
export { newsPage };
