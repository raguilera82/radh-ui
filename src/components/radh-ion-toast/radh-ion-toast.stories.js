import { withA11y } from "@storybook/addon-a11y";
import { addDecorator, storiesOf } from "@storybook/html";
import notes from "./readme.md";

addDecorator(withA11y);

storiesOf("radh-ion-toast", module).add(
  "default",
  () => `<radh-ion-toast></radh-ion-toast>`,
  { notes }
);
