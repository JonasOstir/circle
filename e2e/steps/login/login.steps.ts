import { LoginPage } from '../../pages/login/login.page';

let chai: any = require('chai');
let chaiAsPromised: any = require('chai-as-promised');
chai.use(chaiAsPromised);
let expect: any = chai.expect;

let loginPage: LoginPage;

module.exports = function(): any {
  loginPage = new LoginPage();

  this.Given(/^I go to the login page$/, (callback: any) => {
    loginPage.goToLogin();
    callback();
  });

  this.Then(/^I should see a login form$/, (callback: any) => {
    expect(loginPage.loginFormLoaded()).to.become(true).and.notify(callback);
  });
}
