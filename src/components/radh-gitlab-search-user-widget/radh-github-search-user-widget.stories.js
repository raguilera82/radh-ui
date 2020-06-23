import { withA11y } from '@storybook/addon-a11y';
import { withActions } from '@storybook/addon-actions';
import { addDecorator, storiesOf } from '@storybook/html';
import notes from './readme.md';

addDecorator(withA11y);

storiesOf('Widgets/radh-github-search-user-widget', module)
    .addDecorator(withActions("userSearched"))
    .add('default', () => '<radh-github-search-user-widget></radh-github-search-user-widget>', { notes });
