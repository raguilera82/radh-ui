import { Component, h } from '@stencil/core';


@Component({
  tag: 'radh-button',
  styleUrl: 'radh-button.css'
})
export class RadhButton {

  render() {
    return (
      <button>
        <slot></slot>
      </button>
    );
  }
}
