import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'radh-card-image',
  styleUrl: 'radh-card-image.css',
  shadow: true
})
export class CardImage {
  @Prop() src: string;
  @Prop() alt: string;

  render() {
    return <img class="card-image" src={this.src} alt={this.alt} />;
  }
}
