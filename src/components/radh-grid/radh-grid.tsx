import { Component, h } from "@stencil/core";

@Component({
  tag: "radh-grid",
  styleUrl: "radh-grid.css"
})
export class RadhGrid {
  render() {
    return (
      <div class="grid">
        <div class="grid-item">
          <slot name="1-1" />
        </div>
        <div class="grid-item">
          <slot name="1-2" />
        </div>
        <div class="grid-item">
          <slot name="1-3" />
        </div>
        <div class="grid-item">
          <slot name="2-1" />
        </div>
        <div class="grid-item">
          <slot name="2-2" />
        </div>
        <div class="grid-item">
          <slot name="2-3" />
        </div>
      </div>
    );
  }
}
