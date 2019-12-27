import { withA11y } from '@storybook/addon-a11y';
import { addDecorator, storiesOf } from '@storybook/html';
import notes from './readme.md';

addDecorator(withA11y);

storiesOf('Layouts|radh-holy', module)
    .add('default', () => `
        <radh-holy>
            <div slot="header">Contenido header</div>
            <div slot="nav">Contenido nav</div>
            <div slot="aside">Contenido aside</div>
            <div slot="section">Contenido section</div>
            <div slot="footer">Contenido footer</div>
        </radh-holy>
    `, { notes });
