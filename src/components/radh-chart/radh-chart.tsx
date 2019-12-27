import { Component, Element, Prop, h } from '@stencil/core';
import Chart from 'chart.js';


@Component({
    tag: 'radh-chart',
    styleUrl: 'radh-chart.css'
})
export class RadhChart {

  @Prop() labels: Array<string>;
  @Prop() values: Array<number>;

  @Element() chartEl: HTMLElement;
  canvas: HTMLCanvasElement;
  chart: any;

  componentDidLoad() {
    this.canvas = this.chartEl.getElementsByTagName('canvas')[0];
    this.chart = new Chart(this.canvas, 
      {
 
        type: 'bar',
        data: {
            labels: this.labels,
            datasets: [{
                label: '# of Votes',
                data: this.values,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255,99,132,1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        }

    });
  }

  render() {
    return (
      <div>
        <canvas id="chart"></canvas>
      </div>
    );
  }
}
