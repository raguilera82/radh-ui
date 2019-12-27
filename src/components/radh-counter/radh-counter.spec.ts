import { TestWindow } from '@stencil/core/testing';
import { RadhCounter } from './radh-counter';

describe('radh-counter', () => {
  it('should build', () => {
    expect(new RadhCounter()).toBeTruthy();
  });

  describe('rendering', () => {
    let element: HTMLRadhCounterElement;
    let testWindow: TestWindow;
    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [RadhCounter],
        html: '<radh-counter></radh-counter>'
      });
    });

    // See https://stenciljs.com/docs/unit-testing
    {cursor}

  });
});
