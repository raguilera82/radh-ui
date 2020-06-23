import { storiesOf } from '@storybook/html';
import notes from './readme.md';

storiesOf('99-Experimental/Index', module)
  .add('Index', () => `<index-page></index-page>`, {notes})