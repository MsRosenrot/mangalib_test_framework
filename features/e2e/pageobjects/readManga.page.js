class ReadMangaPage {
  get readerView() {
    return $('.reader-view');
  }

  get readerHeaderActionIcons() {
    return $$('.reader-header-actions .reader-header-action_icon');
  }

  async navigateChapter(forwardOrBack) {
    if (forwardOrBack === 'forward') {
      await this.readerHeaderActionIcons[1].click();
    } else if (forwardOrBack === 'back') {
      await this.readerHeaderActionIcons[0].click();
    }
  }
}

const readMangaPage = new ReadMangaPage();

export { readMangaPage };
