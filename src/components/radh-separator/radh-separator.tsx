import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'radh-separator',
  styleUrl: 'radh-separator.css',
  shadow: true
})
export class Separator {
  @Prop() color: string;
  @Prop() height: string = 'calc(var(--size, 8px) / 8)';

  get style(): { [key: string]: string } {
    return {
      'background-color': this.color,
      height: this.height
    };
  }

  render() {
    return <div class="separator" style={this.style} />;
  }
}
