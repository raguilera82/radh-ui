import { Component, Element, Event, EventEmitter, h, Listen, Method, Prop, State } from "@stencil/core";
import { getLocaleComponentStrings } from "../../utils/locale";

@Component({
  tag: "radh-hello",
  styleUrl: "radh-hello.css"
})
export class RadhHello {
  @Prop() name: string;
  @Event() selected: EventEmitter;

  @Element() myComponent: HTMLElement;

  @State() strings: any;

  async loadStrings() {
    this.strings = await getLocaleComponentStrings(this.myComponent);
  }

  componentWillLoad(): Promise<void> {
    return this.loadStrings();
  }

  @Method()
  async loadLocale() {
    this.loadStrings();
  }

  @Listen("click")
  onListenClick() {
    this.selected.emit(this.name);
    this.addClass();
  }

  addClass() {
    this.myComponent.classList.add("active");
  }

  render() {
    return (
      <div id="hello">
        {this.strings.hello} {this.name}
      </div>
    );
  }
}
