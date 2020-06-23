import { withA11y } from '@storybook/addon-a11y';
import { addDecorator, storiesOf } from '@storybook/html';
import notes from './readme.md';

addDecorator(withA11y);

storiesOf('Components/radh-counter', module)
    .add('default', () => {
        const radhCounter = document.createElement('radh-counter');
        return radhCounter;
    }, { notes });