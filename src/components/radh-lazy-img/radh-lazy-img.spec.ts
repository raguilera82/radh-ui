import { TestWindow } from '@stencil/core/testing';
import { RadhLazyImg } from './radh-lazy-img';

describe('radh-lazy-img', () => {
  it('should build', () => {
    expect(new RadhLazyImg()).toBeTruthy();
  });

  describe('rendering', () => {
    let element: HTMLRadhLazyImgElement;
    let testWindow: TestWindow;
    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [RadhLazyImg],
        html: '<radh-lazy-img></radh-lazy-img>'
      });
    });

    // See https://stenciljs.com/docs/unit-testing
    {cursor}

  });
});
