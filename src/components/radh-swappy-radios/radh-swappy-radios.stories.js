import { storiesOf } from "@storybook/html";
import notes from "./readme.md";

storiesOf("Components/radh-swappy-radios", module)
  .add("Default", () => {
    const fruits = ['Pineapple', 'Apple', 'Banana'];
    setTimeout(() => {
      const el = document.querySelector('radh-swappy-radios');
      el.optionsRadios = fruits;
    }, 500)
    return `<radh-swappy-radios name-radios="fruits" label-radios="Select a fruit"></radh-swappy-radios>`;
  }, { notes });