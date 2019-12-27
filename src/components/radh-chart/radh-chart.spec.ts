import { TestWindow } from '@stencil/core/testing';
import { RadhChart } from './radh-chart';

describe('radh-chart', () => {
  it('should build', () => {
    expect(new RadhChart()).toBeTruthy();
  });

  describe('rendering', () => {
    let element: HTMLRadhChartElement;
    let testWindow: TestWindow;
    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [RadhChart],
        html: '<radh-chart></radh-chart>'
      });
    });

    // See https://stenciljs.com/docs/unit-testing
    {cursor}

  });
});
