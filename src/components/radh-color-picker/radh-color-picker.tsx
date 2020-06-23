import { Component, Event, EventEmitter, Prop, State, h } from '@stencil/core';

@Component({
  tag: 'radh-color-picker',
  styleUrl: 'radh-color-picker.css'
})
export class ColorPicker {

  @Prop() defaultValue: string = "#ff0000";
  @Prop() resettable: boolean = false;

  @State() value: string;

  @Event() colorChanged: EventEmitter;

  componentWillLoad() {
    this.setValue(this.defaultValue);
  }

  handleChange(event) {
    this.setValue(event.target.value);
  }

  setValue(value) {
    this.value = value;
    this.colorChanged.emit(this.value);
  }

  reset() {
    this.setValue(this.defaultValue);
  }

  renderResetButton() {
    if (this.resettable) {
      return <radh-button onClick={() => this.reset()}>X</radh-button>;
    }
  }

  render() { 
    return (
      <div class="color-picker">
        <input type="color" value={this.value} onChange={(ev) => this.handleChange(ev)} />
        <span>{this.value}</span>
        { this.renderResetButton() }
     </div>
    );
  }
}