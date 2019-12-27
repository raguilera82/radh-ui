import { TestWindow } from '@stencil/core/testing';
import { RadhLocaleSelect } from './radh-locale-select';

describe('radh-locale-select', () => {
  it('should build', () => {
    expect(new RadhLocaleSelect()).toBeTruthy();
  });

  describe('rendering', () => {
    let element: HTMLRadhLocaleSelectElement;
    let testWindow: TestWindow;
    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [RadhLocaleSelect],
        html: '<radh-locale-select>' 
          + '</radh-locale-select>'
      });
    });

    it('creates the element', () => {
      expect(element).toBeTruthy();
    });
  });
});
