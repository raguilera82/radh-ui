import { withA11y } from '@storybook/addon-a11y';
import { addDecorator, storiesOf } from '@storybook/html';
import notes from './readme.md';

addDecorator(withA11y);

storiesOf('Components/radh-auto-complete', module)
    .add('default', () =>
        `<radh-autocomplete label="Elige la fruta" label-by="fruitlabel" isAsync="false"
      items='[ "Apple", "Banana", "Orange", "Mango", "Pear", "Peach", "Grape", "Tangerine", "Pineapple"]'>
    </radh-autocomplete>`

        , { notes });

document.addEventListener('valueSelected', (ev) => {
    console.log(ev.detail);
});
