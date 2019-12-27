import { TestWindow } from '@stencil/core/testing';
import { RadhUrlCode } from './radh-url-code';

describe('radh-url-code', () => {
  it('should build', () => {
    expect(new RadhUrlCode()).toBeTruthy();
  });

  describe('rendering', () => {
    let element: HTMLRadhUrlCodeElement;
    let testWindow: TestWindow;
    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [RadhUrlCode],
        html: '<radh-url-code></radh-url-code>'
      });
    });

    // See https://stenciljs.com/docs/unit-testing
    {cursor}

  });
});
