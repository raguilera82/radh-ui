import { withA11y } from '@storybook/addon-a11y';
import { addDecorator, storiesOf } from '@storybook/html';
import notes from './readme.md';

addDecorator(withA11y);

storiesOf('radh-hello', module)
    .add('default', () =>
        `
        <radh-locale-select locales='[{"name": "English", "value": "en"}, {"name":"Español", "value": "es"}]'>
        </radh-locale-select>

        <radh-hello name="Rubén Aguilera"></radh-hello>`

        , { notes });

document.addEventListener('sendLocale', (ev) => {
    var radhHello = document.querySelector('radh-hello');
    radhHello.lang = ev.detail;
    radhHello.loadLocale();
});




