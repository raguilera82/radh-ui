import { Component, Event, EventEmitter, Prop, State, Watch, h } from '@stencil/core';

interface Locale {
  name: string;
  value: string;
}

@Component({
  tag: 'radh-locale-select',
  styleUrl: 'radh-locale-select.css'
})
export class RadhLocaleSelect {

  @Event() sendLocale: EventEmitter;

  @Prop() locales: string;

  @State() innerLocales: Locale[];

  @Watch('locales')
  parseLocale(newValue: string) {
    if (newValue) this.innerLocales = JSON.parse(this.locales);
  }

  componentWillLoad() {
    this.parseLocale(this.locales);
  }

  handleSelect(event) {
    this.sendLocale.emit(event.target.value);
  }

  render() {
    if (this.innerLocales) {
      return (
        <div>
          <select onChange={(ev) => this.handleSelect(ev)}>
            {this.innerLocales.map(locale => 
              <option value={locale.value}>{locale.name}</option>
              )}
          </select>
        </div>
      );
    }
  }
}
