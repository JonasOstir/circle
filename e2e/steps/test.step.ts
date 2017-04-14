let chai: any = require('chai');
let chaiAsPromised: any = require('chai-as-promised');
chai.use(chaiAsPromised);
let expect: any = chai.expect;


module.exports = function(): any {

  this.Given(/^I go to the login page$/, (callback: any) => {
    expect(true).to.become(true).and.notify(callback);
    callback();
  });

  this.Then(/^I should see a login form$/, (callback: any) => {
    expect(false).to.become(true).and.notify(callback);
  });
};
