import { withA11y } from '@storybook/addon-a11y';
import { addDecorator, storiesOf } from '@storybook/html';
import notes from './readme.md';

addDecorator(withA11y);

storiesOf('Layouts|radh-layout-center', module)
    .add('default', () => `
        <radh-layout-center>
            <radh-form-login>
                <form [formGroup]="form" class="form">
                    <fieldset>
                        <div class="col">
                            <label>Usuario</label>
                            <input type="text" formControlName="username">
                            <label>Contraseña</label>
                            <input type="password" formControlName="password">
                            <p><b>Nota:</b>Solo comprueba que usuario y contraseña sean la misma</p>
                        </div>
                    </fieldset>
                    <radh-button>Entrar</radh-button>
                </form>
            </radh-form-login>
        </radh-layout-center>
    `, { notes });