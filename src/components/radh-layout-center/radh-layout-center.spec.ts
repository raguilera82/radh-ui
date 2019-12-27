import { TestWindow } from '@stencil/core/testing';
import { RadhLayoutCenter } from './radh-layout-center';

describe('radh-layout-center', () => {
  it('should build', () => {
    expect(new RadhLayoutCenter()).toBeTruthy();
  });

  describe('rendering', () => {
    let element: HTMLRadhLayoutCenterElement;
    let testWindow: TestWindow;
    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [RadhLayoutCenter],
        html: '<radh-layout-center></radh-layout-center>'
      });
    });

    // See https://stenciljs.com/docs/unit-testing
    {cursor}

  });
});
