import { withA11y } from '@storybook/addon-a11y';
import { addDecorator, storiesOf } from '@storybook/html';
import notes from './readme.md';

addDecorator(withA11y);

storiesOf('Layouts/radh-fluid-grid', module)
    .add('default', () => `
    <radh-fluid-grid>
        <img src="/assets/imgs/dummy-on.jpeg">
        <img src="/assets/imgs/dummy-on.jpeg">
        <img src="/assets/imgs/dummy-on.jpeg">
        <img src="/assets/imgs/dummy-on.jpeg">
        <img src="/assets/imgs/dummy-on.jpeg"> 
        <img src="/assets/imgs/dummy-on.jpeg">
        <img src="/assets/imgs/dummy-on.jpeg">        
    </radh-fluid-grid>`, { notes });