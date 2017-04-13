import { CirclePage } from './app.po';

describe('circle App', () => {
  let page: CirclePage;

  beforeEach(() => {
    page = new CirclePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
