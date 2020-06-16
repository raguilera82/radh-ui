import { storiesOf } from '@storybook/html';
import notes from './readme.md';

storiesOf('Components', module)
.add('My Component', () => {
  return `<my-component first="Rubén" middle="Aguilera" last="Diaz-Heredero"></my-component>`
}, {notes})