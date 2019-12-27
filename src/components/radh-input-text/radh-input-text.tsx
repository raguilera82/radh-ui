import { Component, Event, EventEmitter, h, Prop } from "@stencil/core";

@Component({
  tag: "radh-input-text",
  styleUrl: "radh-input-text.css"
})
export class RadhInputText {
  @Prop() label: string;
  @Prop() name: string;
  @Prop({ mutable: true }) value: string;

  @Event() changed: EventEmitter<string>;

  handleChange(ev) {
    this.value = ev.target ? ev.target.value : null;
    this.changed.emit(this.value);
  }

  render() {
    return (
      <label>
        {this.label}
        <input
          value={this.value}
          type="text"
          name={this.name}
          onInput={ev => this.handleChange(ev)}
        />
      </label>
    );
  }
}
