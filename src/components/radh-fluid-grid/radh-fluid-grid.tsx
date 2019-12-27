import { Component, h } from '@stencil/core';


@Component({
  tag: 'radh-fluid-grid',
  styleUrl: 'radh-fluid-grid.css'
})
export class RadhFluidGrid {

  render() {
    return (
      <div class="grid">
        <slot></slot>
      </div>
    );
  }
}
