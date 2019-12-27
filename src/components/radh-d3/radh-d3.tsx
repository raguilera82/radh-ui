import { Component, h } from '@stencil/core';
import { select } from 'd3-selection';

@Component({
  tag: 'radh-d3',
  styleUrl: 'radh-d3.css'
})
export class RadhD3 {

  componentDidLoad() {
    select('#parrafo').style('color', 'green').style('font-size', '20px');
  }

  render() {
    return (
      <div>
        <p id="parrafo">Linea de texto que contiene un parrafo en D3</p>
      </div>
    );
  }
}
