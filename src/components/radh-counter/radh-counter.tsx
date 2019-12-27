import { Component, h, State } from '@stencil/core';


@Component({
    tag: 'radh-counter',
    styleUrl: 'radh-counter.css'
})
export class RadhCounter {

   @State() count = 0;

    increment = () => {
        this.count = this.count + 1;
    }
  
    render() {
      return (
        <div>
          <button onClick={this.increment}>{this.count}</button>
        </div>
      );
    }
}
