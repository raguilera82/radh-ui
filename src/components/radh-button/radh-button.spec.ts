import { TestWindow } from '@stencil/core/testing';
import { RadhButton } from './radh-button';

describe('radh-button', () => {
  it('should build', () => {
    expect(new RadhButton()).toBeTruthy();
  });

  describe('rendering', () => {
    let element: HTMLRadhButtonElement;
    let testWindow: TestWindow;
    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [RadhButton],
        html: '<radh-button>' 
          + '</radh-button>'
      });
    });

    it('creates the element', () => {
      expect(element).toBeTruthy();
    });
  });
});
