import { withA11y } from '@storybook/addon-a11y';
import { addDecorator, storiesOf } from '@storybook/html';
import notes from './readme.md';

addDecorator(withA11y);

storiesOf('radh-nav', module)
    .add('default', () => `
        <radh-nav>
    <ul class="down sel">
      <li class="active">
        <a href="#">Opción de menú 1</a>
        <nav class="subnavbar">
          <ul>
            <li>
              <a href="">Opción de menú 1</a></li>
            <li>
              <a href="">Opción de menú 2</a>
            </li>
            <li class="active">
              <a href="">Opción de menú 3</a>
              <nav class="third-level">
                <a href="">Opción de menú 1</a>
                <a href="">Opción de menú 2</a>
                <a href="" class="active">Opción de menú 3</a>
                <a href="">Opción de menú 4</a>
                <a href="">Opción de menú 5</a>
              </nav>
            </li>
            <li>
              <a href="">Opción de menú 4</a>
            </li>
            <li>
              <a href="">Opción de menú 5</a>
            </li>
          </ul>
        </nav>
      </li>
      <li>
        <a href="">Opción de menú 2</a>
      </li>
      <li>
        <a href="">Opción de menú 3</a>
      </li>
      <li>
        <a href="">Opción de menú 4</a>
      </li>
      <li>
        <a href="">Opción de menú 5</a>
      </li>
    </ul>
  </radh-nav>
    `, { notes });
