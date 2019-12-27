import { withA11y } from '@storybook/addon-a11y';
import { addDecorator, storiesOf } from '@storybook/html';
import notes from './readme.md';

addDecorator(withA11y);

storiesOf('Layouts|radh-grid', module)
    .add('default', () => `
        <radh-grid>
            <p slot="1-1">1-1</p>
            <p slot="1-2">1-2</p>
            <p slot="1-3">1-3</p>
            <p slot="2-1">2-1</p>
            <p slot="2-2">2-2</p>
            <p slot="2-3">2-3</p>
        </radh-grid>
    `, { notes });
