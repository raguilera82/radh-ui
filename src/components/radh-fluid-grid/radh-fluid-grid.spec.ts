import { TestWindow } from '@stencil/core/testing';
import { RadhFluidGrid } from './radh-fluid-grid';

describe('radh-fluid-grid', () => {
  it('should build', () => {
    expect(new RadhFluidGrid()).toBeTruthy();
  });

  describe('rendering', () => {
    let element: HTMLRadhFluidGridElement;
    let testWindow: TestWindow;
    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [RadhFluidGrid],
        html: '<radh-fluid-grid>' 
          + '</radh-fluid-grid>'
      });
    });

    it('creates the element', () => {
      expect(element).toBeTruthy();
    });
  });
});
