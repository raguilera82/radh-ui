import { Component, h } from '@stencil/core';

@Component({
  tag: 'radh-card',
  styleUrl: 'radh-card.css',
  shadow: true
})
export class RadhCard {
  render() {
    return (
      <article class="card">
        <h2 class="title content">
          <slot name="title" />
        </h2>
        <div class="image">
          <slot name="image" />
        </div>
        <p class="description content">
          <slot name="description" />
        </p>
        <footer class="footer content">
          <slot name="footer" />
        </footer>
        <radh-separator class="separator" color="var(--radh-nude, red)"></radh-separator>
      </article>
    );
  }
}
