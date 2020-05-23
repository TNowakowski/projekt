import { ProjektPage } from './app.po';

describe('projekt App', function() {
  let page: ProjektPage;

  beforeEach(() => {
    page = new ProjektPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
