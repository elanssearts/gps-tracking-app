import { GpsPage } from './app.po';

describe('gps App', () => {
  let page: GpsPage;

  beforeEach(() => {
    page = new GpsPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
