import { TestWindow } from '@stencil/core/testing';
import { RadhAuth } from './radh-auth';

describe('radh-auth', () => {
  it('should build', () => {
    expect(new RadhAuth()).toBeTruthy();
  });

  describe('rendering', () => {
    let element: HTMLRadhAuthElement;
    let testWindow: TestWindow;
    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [RadhAuth],
        html: '<radh-auth></radh-auth>'
      });
    });

    // See https://stenciljs.com/docs/unit-testing
    {cursor}

  });
});
