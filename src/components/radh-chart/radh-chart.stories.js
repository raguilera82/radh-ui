import { withA11y } from '@storybook/addon-a11y';
import { addDecorator, storiesOf } from '@storybook/html';
import notes from './readme.md';

addDecorator(withA11y);

storiesOf('radh-chart', module)
    .add('default', () => {
        const radhChart = document.createElement('radh-chart');
        radhChart.labels = ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"];
        radhChart.values = [3, 19, 3, 50, 20, 3];
        return radhChart;
    }, { notes });