import { TestWindow } from '@stencil/core/testing';
import { RadhColorPicker } from './radh-color-picker';

describe('radh-color-picker', () => {
  it('should build', () => {
    expect(new RadhColorPicker()).toBeTruthy();
  });

  describe('rendering', () => {
    let element: HTMLRadhColorPickerElement;
    let testWindow: TestWindow;
    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [RadhColorPicker],
        html: '<radh-color-picker>' 
          + '</radh-color-picker>'
      });
    });

    it('creates the element', () => {
      expect(element).toBeTruthy();
    });
  });
});
