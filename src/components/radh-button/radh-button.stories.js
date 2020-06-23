import { withA11y } from '@storybook/addon-a11y';
import { addDecorator, storiesOf } from '@storybook/html';
import { color, text } from '@storybook/addon-knobs';
import notes from './readme.md';

addDecorator(withA11y);

storiesOf('Components/radh-button', module)
    .add('default', () => {
        const label = text("label", "Test");
        const propertiesSelected = {
            "--radh-button-background-color": color("Select color background", "blue"),
            "--radh-button-color": color("Select color text", "white")
        };
        setTimeout(() => {
            const el = document.querySelector("radh-button");
              if (el) {
                Object.keys(propertiesSelected).forEach(key =>
                  el.style.setProperty(key, propertiesSelected[key])
                );
              }
          }, 1);
        return `<radh-button>${label}</radh-button>`;
    }, { notes });