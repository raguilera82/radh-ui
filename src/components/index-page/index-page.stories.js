import { storiesOf } from '@storybook/html';
import notes from './readme.md';

storiesOf('Experimental/Index', module)
  .add('Index', () => `<index-page></index-page>`, {notes})