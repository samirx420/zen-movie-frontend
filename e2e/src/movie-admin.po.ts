import { browser, by, element } from 'protractor';

export class MovieAdminPage {
  navigateTo(): Promise<unknown> {
    return browser.get(browser.baseUrl + '/admin/movie') as Promise<unknown>;
  }
}
