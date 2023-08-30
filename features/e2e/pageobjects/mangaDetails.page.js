import { BasePage } from './basePage.js';

class MangaDetailsPage extends BasePage {
  get mangaPageTitle() {
    return $('.media-name__main');
  }

  get mangaName() {
    return this.mangaPageTitle.getText();
  }

  get startReadingBtn() {
    return $('.media-sidebar .button_primary');
  }

  get addToCollectionBtn() {
    return $('#button-change-status');
  }

  get rateMangaBtn() {
    return $('.media-rating-wrap__btn');
  }

  get ratingPoints() {
    return $$('.rating__star.rating__current');
  }

  get deleteMyRatingBtn() {
    return $('button.button_sm.button_red');
  }

  get collectionList() {
    return $$('.menu_default.menu_xs div');
  }

  get upvoteSimilarBtn() {
    return $('.media-similar-rating__action_up');
  }

  get downvoteSimilarBtn() {
    return $('.media-similar-rating__action_down');
  }

  get votesCountSimilar() {
    return $('.media-similar-rating__value').getText();
  }

  get commentsBtn() {
    return $('[data-key="comments"]');
  }

  get commentsInputFolded() {
    return $('.comments__pseudo-form');
  }

  get commentsInputUnfolded() {
    return $('.comment-reply__editor');
  }

  get confirmReadRulesCheckbox() {
    return $('.control__indicator_checkbox');
  }

  get confirmReadRulesBtn() {
    return $('p .button_sm');
  }

  get sendCommentBtn() {
    return $('.comment-reply__send');
  }

  get listOfCommentTexts() {
    return $$('.comment__content div');
  }

  async startReadingManga(url) {
    await mangaDetailsPage.navigate(url);
    this.startReadingBtn.waitForClickable();
    await this.startReadingBtn.click();
  }

  async addMangaToList(list) {
    this.addToCollectionBtn.waitForClickable();
    await this.addToCollectionBtn.click();

    await this.collectionList[0].waitForDisplayed();
    for (let i = 0; i < await this.collectionList.length; i++) {
      await console.log(await this.collectionList[i].getText());
      const nameOfCollection = await this.collectionList[i].getText();
      if (await nameOfCollection === list) {
        await this.collectionList[i].click();
      }
    }
  }

  async rateManga(points) {
    const rating = ['', 9, 8, 7, 6, 5, 4, 3, 2, 1, 0];

    await this.rateMangaBtn.waitForClickable();
    await this.rateMangaBtn.click();
    await this.ratingPoints[rating[points]].click();
    await this.deleteMyRatingBtn.waitForClickable();
  }

  async confirmRulesRead() {
    await this.confirmReadRulesCheckbox.click();
    await this.confirmReadRulesBtn.click();
    await this.commentsInputFolded.waitForClickable();
  }

  async addComment(text) {
    await this.commentsInputFolded.click();
    await this.commentsInputUnfolded.waitForClickable();
    await this.commentsInputUnfolded.click();
    await this.commentsInputUnfolded.setValue(text);
    await this.sendCommentBtn.waitForClickable();
    await this.sendCommentBtn.click();
  }

  async findCommentByText(text) {
    let indexOfComment = null;
    for (let i = 0; i < await this.listOfCommentTexts.length; i++) {
      const commentText = await this.listOfCommentTexts[i].getText();
      if (commentText === text) {
        indexOfComment = i;
      }
    }

    const comment = {
      commentElement: await $$('.comment__body')[indexOfComment],
      commentSelector: `.comment:nth-child(${await indexOfComment + 1})`,
      optionsBtn: await $$('.comment__control_dropdown')[await indexOfComment],
      deleteBtn: await $('.menu_xs div:nth-child(2)'),
      editBtn: await $('.menu_xs div:nth-child(1)'),
      replyBtn: await $$('.button_link')[indexOfComment],
      index: await indexOfComment,
    };
    return comment;
  }

  async deleteCommentByText(text) {
    const comment = await this.findCommentByText(text);
    const optionsBtn = await comment.optionsBtn;
    const deleteBtn = await comment.deleteBtn;
    await optionsBtn.waitForClickable();
    await optionsBtn.click();
    await deleteBtn.waitForClickable();
    await deleteBtn.click();
    await browser.acceptAlert();
  }
}

let mangaDetailsPage = new MangaDetailsPage();
export { mangaDetailsPage };
