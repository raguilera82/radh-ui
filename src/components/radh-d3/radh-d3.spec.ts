import { TestWindow } from '@stencil/core/testing';
import { RadhD3 } from './radh-d3';

describe('radh-d3', () => {
  it('should build', () => {
    expect(new RadhD3()).toBeTruthy();
  });

  describe('rendering', () => {
    let element: HTMLRadhD3Element;
    let testWindow: TestWindow;
    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [RadhD3],
        html: '<radh-d3></radh-d3>'
      });
    });

    // See https://stenciljs.com/docs/unit-testing
    {cursor}

  });
});
