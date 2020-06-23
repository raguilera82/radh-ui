import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'radh-card-image',
  styleUrl: 'radh-card-image.css',
  shadow: true
})
export class CardImage {
  @Prop() imgSrc!: string;
  @Prop() imgAlt!: string;

  render() {
    return <img class="card-image" src={this.imgSrc} alt={this.imgAlt} />;
  }
}
