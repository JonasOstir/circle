import { ManagerPage } from './app.po';

xdescribe('Manager App', function() {
  let page: ManagerPage;

  beforeEach(() => {
    page = new ManagerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
