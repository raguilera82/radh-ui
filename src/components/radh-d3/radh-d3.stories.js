import { withA11y } from '@storybook/addon-a11y';
import { addDecorator, storiesOf } from '@storybook/html';
import notes from './readme.md';

addDecorator(withA11y);

storiesOf('radh-d3', module)
    .add('default', () => `<radh-d3></radh-d3>`, { notes });