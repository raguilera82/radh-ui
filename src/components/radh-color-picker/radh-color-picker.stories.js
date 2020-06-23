import { withA11y } from '@storybook/addon-a11y';
import { addDecorator, storiesOf } from '@storybook/html';
import notes from './readme.md';

addDecorator(withA11y);

storiesOf('Components/radh-color-picker', module)
    .add('default', () =>
        `<radh-color-picker default-value="#0000ff" resettable></radh-color-picker>`

        , { notes });

document.addEventListener('colorChanged', (ev) => {
    console.log(ev.detail);
});




