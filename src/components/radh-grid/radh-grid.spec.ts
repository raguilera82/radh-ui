import { TestWindow } from '@stencil/core/testing';
import { RadhGrid } from './radh-grid';

describe('radh-grid', () => {
  it('should build', () => {
    expect(new RadhGrid()).toBeTruthy();
  });

  describe('rendering', () => {
    let element: HTMLRadhGridElement;
    let testWindow: TestWindow;
    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [RadhGrid],
        html: '<radh-grid></radh-grid>'
      });
    });

    // See https://stenciljs.com/docs/unit-testing
    {cursor}

  });
});
