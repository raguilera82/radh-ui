import { TestWindow } from '@stencil/core/testing';
import { RadhAutocomplete } from './radh-autocomplete';

describe('radh-autocomplete', () => {
  it('should build', () => {
    expect(new RadhAutocomplete()).toBeTruthy();
  });

  describe('rendering', () => {
    let element: HTMLRadhAutocompleteElement;
    let testWindow: TestWindow;
    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [RadhAutocomplete],
        html: '<radh-autocomplete></radh-autocomplete>'
      });
    });

    // See https://stenciljs.com/docs/unit-testing
    {cursor}

  });
});
