import { $ } from '@wdio/globals';
import { BasePage } from './basePage.js';

class LoginPage extends BasePage {
  get inputLogin() {
    return $('[name = "email"]');
  }

  get inputPassword() {
    return $('[name = "password"]');
  }

  get submitBtn() {
    return $('button[type="submit"]');
  }

  get loginErrorMsg() {
    return $('div.form__error').getText();
  }

  async login(login, password) {
    await this.inputLogin.setValue(login);
    await this.inputPassword.setValue(password);
    await this.submitBtn.click();
    await browser.execute(() => document.readyState === 'complete');
  }
}

export default new LoginPage();
