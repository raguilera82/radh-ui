import { withA11y } from '@storybook/addon-a11y';
import { addDecorator, storiesOf } from '@storybook/html';
import notes from './readme.md';

addDecorator(withA11y);

storiesOf('Layouts|radh-card', module)
    .add('default', () => `
        <radh-page-container>
            <radh-card slot="foreground">
                <p slot="title">Este es el título</p>
                <radh-card-image slot="image" src="assets/imgs/people.svg" alt="People"></radh-card-image>
                <p slot="description">Esta es la descripción</p>
                <p slot="footer">Esto es el footer</p>
            </radh-card>
        </radh-page-container>
    `, { notes });
