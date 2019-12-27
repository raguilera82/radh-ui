import { Component, h } from '@stencil/core';

@Component({
  tag: 'radh-page-container',
  styleUrl: 'radh-page-container.css',
  shadow: true
})
export class PageContainer {
  render() {
    return (
      <section class="page-container">
        <div class="background">
          <slot name="background" />
        </div>
        <div class="foreground">
          <slot name="foreground" />
        </div>
      </section>
    );
  }
}
