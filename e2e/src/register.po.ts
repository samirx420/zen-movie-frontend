import { browser, by, element } from 'protractor';

export class RegisterPage {
  navigateTo(): Promise<unknown> {
    return browser.get(browser.baseUrl + '/register') as Promise<unknown>;
  }
}
