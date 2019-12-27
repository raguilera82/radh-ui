import { TestWindow } from '@stencil/core/testing';
import { RadhFormLogin } from './radh-form-login';

describe('radh-form-login', () => {
  it('should build', () => {
    expect(new RadhFormLogin()).toBeTruthy();
  });

  describe('rendering', () => {
    let element: HTMLRadhFormLoginElement;
    let testWindow: TestWindow;
    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [RadhFormLogin],
        html: '<radh-form-login></radh-form-login>'
      });
    });

    // See https://stenciljs.com/docs/unit-testing
    {cursor}

  });
});
