import { withA11y } from '@storybook/addon-a11y';
import { addDecorator, storiesOf } from '@storybook/html';
import notes from './readme.md';

addDecorator(withA11y);

storiesOf('radh-lazy-img', module)
    .add('With several load times', () => `
    <radh-fluid-grid>
        <radh-lazy-img time="3500" img-src="/assets/imgs/dummy-on.jpeg"></radh-lazy-img>
        <radh-lazy-img time="1000" img-src="/assets/imgs/dummy-on.jpeg"></radh-lazy-img>
        <radh-lazy-img time="3000" img-src="/assets/imgs/dummy-on.jpeg"></radh-lazy-img>
        <radh-lazy-img time="5000" img-src="/assets/imgs/dummy-on.jpeg"></radh-lazy-img>
        <radh-lazy-img time="1000" img-src="/assets/imgs/dummy-on.jpeg"></radh-lazy-img>
        <radh-lazy-img img-src="/assets/imgs/dummy-on.jpeg"></radh-lazy-img>
        <radh-lazy-img time="1000" img-src="/assets/imgs/dummy-on.jpeg"></radh-lazy-img>
        <radh-lazy-img time="2000" img-src="/assets/imgs/dummy-on.jpeg"></radh-lazy-img>
        <radh-lazy-img time="1000" img-src="/assets/imgs/dummy-on.jpeg"></radh-lazy-img>
        <radh-lazy-img time="1000" img-src="/assets/imgs/dummy-on.jpeg"></radh-lazy-img>    
    </radh-fluid-grid>
    `, { notes });
