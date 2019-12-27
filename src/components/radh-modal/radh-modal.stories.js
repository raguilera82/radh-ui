import { withA11y } from '@storybook/addon-a11y';
import { addDecorator, storiesOf } from '@storybook/html';
import notes from './readme.md';

addDecorator(withA11y);

storiesOf('radh-modal', module)
    .add('default', () => {

        const el = document.createElement('el');

        const modal = document.createElement('radh-modal');
        modal.title = 'Important!';
        modal.innerHTML = 'Super important message';
        modal.visible = false;
        modal.style.setProperty('--header-bg-color', '#CCC');

        modal.addEventListener("ok", function () {
            console.log("ok");
        });
        modal.addEventListener("cancel", function () {
            console.log("cancel");
        });

        const radhButton = document.createElement('radh-button');
        radhButton.className = 'open';
        radhButton.innerHTML = 'Open';
        radhButton.addEventListener("click", function () {
            console.log(modal);
            modal.visible = true;
        })

        el.appendChild(modal);
        el.appendChild(radhButton);

        return el;

    }, { notes });

