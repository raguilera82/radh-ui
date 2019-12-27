import { Component, h } from '@stencil/core';

@Component({
  tag: 'radh-nav',
  styleUrl: 'radh-nav.css'
})
export class RadhNav {

  render() {
    return (
      <nav title="Menu principal" role="navigation" class="navbar"><span class="menu"></span>
        <slot></slot>
      </nav>
    );
  }

}
