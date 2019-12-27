import { TestWindow } from '@stencil/core/testing';
import { RadhHoly } from './radh-holy';

describe('radh-holy', () => {
  it('should build', () => {
    expect(new RadhHoly()).toBeTruthy();
  });

  describe('rendering', () => {
    let element: HTMLRadhHolyElement;
    let testWindow: TestWindow;
    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [RadhHoly],
        html: '<radh-holy></radh-holy>'
      });
    });

    // See https://stenciljs.com/docs/unit-testing
    {cursor}

  });
});
