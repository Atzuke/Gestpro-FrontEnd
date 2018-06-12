import { GestproFrontEndPage } from './app.po';

describe('gestpro-front-end App', function() {
  let page: GestproFrontEndPage;

  beforeEach(() => {
    page = new GestproFrontEndPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
