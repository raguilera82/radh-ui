import notes from "./readme.md";
import { storiesOf } from "@storybook/html";

storiesOf("99-Experimental/radh-card-image", module)
  .add("Default", () => {
      const imgSrc = '/assets/imgs/people.svg';
      const imgAlt = 'Gente';
      return `<radh-card-image img-src="${imgSrc}" img-alt="${imgAlt}"></radh-card-image>`
  }, { notes });