import { TestWindow } from '@stencil/core/testing';
import { RadhInputText } from './radh-input-text';

describe('radh-input-text', () => {
  it('should build', () => {
    expect(new RadhInputText()).toBeTruthy();
  });

  describe('rendering', () => {
    let element: HTMLRadhInputTextElement;
    let testWindow: TestWindow;
    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [RadhInputText],
        html: '<radh-input-text>' 
          + '</radh-input-text>'
      });
    });

    it('creates the element', () => {
      expect(element).toBeTruthy();
    });
  });
});
