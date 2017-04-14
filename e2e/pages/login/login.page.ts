/* tslint:disable */
import { browser, element, by } from 'protractor';

export class LoginPage {
  public goToLogin(): Promise<any> {
    return browser.get('/');
  }

  public loginFormLoaded(): Promise<boolean> {
    return element(by.css('.c-auth')).isPresent();
  }
}
