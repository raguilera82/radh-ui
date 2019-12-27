import { TestWindow } from '@stencil/core/testing';
import { RadhGitlabSearchUser } from './radh-github-search-user';

describe('radh-gitlab-search-user', () => {
  it('should build', () => {
    expect(new RadhGitlabSearchUser()).toBeTruthy();
  });

  describe('rendering', () => {
    let element: HTMLRadhGitlabSearchUserElement;
    let testWindow: TestWindow;
    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [RadhGitlabSearchUser],
        html: '<radh-gitlab-search-user>' 
          + '</radh-gitlab-search-user>'
      });
    });

    it('creates the element', () => {
      expect(element).toBeTruthy();
    });
  });
});
