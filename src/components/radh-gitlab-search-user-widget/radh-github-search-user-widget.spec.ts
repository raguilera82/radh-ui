import { TestWindow } from '@stencil/core/testing';
import { RadhGitlabSearchUserWidget } from './radh-github-search-user-widget';

describe('radh-gitlab-search-user-widget', () => {
  it('should build', () => {
    expect(new RadhGitlabSearchUserWidget()).toBeTruthy();
  });

  describe('rendering', () => {
    let element: HTMLRadhGitlabSearchUserWidgetElement;
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
