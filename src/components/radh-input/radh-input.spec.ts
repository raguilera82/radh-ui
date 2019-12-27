import { TestWindow } from '@stencil/core/testing';
import { RadhInput } from './radh-input';

describe('radh-input', () => {
  it('should build', () => {
    expect(new RadhInput()).toBeTruthy();
  });

  describe('rendering', () => {
    let element: HTMLRadhInputElement;
    let testWindow: TestWindow;
    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [RadhInput],
        html: '<radh-input></radh-input>'
      });
    });

    // See https://stenciljs.com/docs/unit-testing
    {cursor}

  });
});
