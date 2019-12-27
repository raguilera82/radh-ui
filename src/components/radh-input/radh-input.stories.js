import { withA11y } from '@storybook/addon-a11y';
import { addDecorator, storiesOf } from '@storybook/html';
import notes from './readme.md';

addDecorator(withA11y);

storiesOf('radh-input', module)
    .add('default', () => {
        const radhInput = document.createElement('radh-input');
        const validator = [{
            name: 'length',
            options: {
                min: 6
            }
        }, 'fruit'];
        radhInput.validator = validator;
        return radhInput;
    }, { notes });


document.addEventListener('changed', (ev) => {
    console.log(ev.detail);
});