import { TestWindow } from '@stencil/core/testing';
import { RadhUser } from './radh-user';

describe('radh-user', () => {
  it('should build', () => {
    expect(new RadhUser()).toBeTruthy();
  });

  describe('rendering', () => {
    let element: HTMLRadhUserElement;
    let testWindow: TestWindow;
    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [RadhUser],
        html: '<radh-user>' 
          + '</radh-user>'
      });
    });

    it('creates the element', () => {
      expect(element).toBeTruthy();
    });
  });
});
