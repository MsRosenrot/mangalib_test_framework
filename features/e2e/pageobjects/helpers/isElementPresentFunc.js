const isElementPresent = async function (elementSelector) {
  const elementsArray = await browser.execute(function () {
    return document.querySelectorAll(arguments[0]);
  }, elementSelector);
  if (await !elementsArray.length) {
    return false;
  }
  return true;
};

export { isElementPresent };
