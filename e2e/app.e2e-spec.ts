import { TMDBAngular2Page } from './app.po';

describe('tmdb-angular2 App', () => {
  let page: TMDBAngular2Page;

  beforeEach(() => {
    page = new TMDBAngular2Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
