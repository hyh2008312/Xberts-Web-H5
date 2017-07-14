import { XbertsWebPage } from './app.po';

describe('xberts-web App', () => {
  let page: XbertsWebPage;

  beforeEach(() => {
    page = new XbertsWebPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
