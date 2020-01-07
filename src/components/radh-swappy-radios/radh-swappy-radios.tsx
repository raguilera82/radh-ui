import { Component, Element, Event, EventEmitter, h, Listen, Method, Prop } from '@stencil/core';

@Component({
  tag: 'radh-swappy-radios',
  styleUrl: 'radh-swappy-radios.css',
  shadow: true
})
export class RADHSwappyRadios {

  selectRadio: number;

  @Prop() nameRadios: string = 'options';
  @Prop() labelRadios: string = 'Select An Option';
  @Prop() optionsRadios: string[] = ['Banana', 'Strawberry'];

  @Event() selectedOption: EventEmitter;

  @Element() elem: HTMLElement;

  radios: HTMLElement[];

  @Method()
  async getSelectedRadio() {
    return this.selectRadio;
  }

  @Listen('keydown')
  handleKeyDown(ev: KeyboardEvent) {
    if (ev.key === 'ArrowUp' || ev.key === 'ArrowLeft') {
      ev.preventDefault();
      if (this.selected === 0) {
        this.selected = this.radios.length - 1;
      } else {
        this.selected--;
      }
    }
    if (ev.key === 'ArrowDown' || ev.key === 'ArrowRight') {
      ev.preventDefault();
      if (this.selected === this.radios.length - 1) {
        this.selected = 0;
      } else {
        this.selected++;
      }
    }
  }

  componentDidLoad() {
    this.radios = Array.from(this.elem.shadowRoot.querySelectorAll('input[type="radio"]'));
  }

  get selected() {
    return this.selectRadio;
  }

  set selected(ind: number) {
    console.log('selected: ' + ind);
    if (isFinite(this.selected)) {
      let previousSelected = this.radios[this.selected];
      previousSelected.tabIndex = -1;
      previousSelected.setAttribute('aria-checked', 'false');
    }

    let newSelected = this.radios[ind];
    newSelected.tabIndex = 0;
    newSelected.focus();
    newSelected.setAttribute('aria-checked', 'true');

    this.elem.setAttribute('selected', '' + ind);
    this.selectRadio = ind;
  }

  onChangeRadio(ev: any) {
    this.selected = this.radios.indexOf(ev.target);
    this.selectedOption.emit(this.selected);
  }

  render() {
    return (
      <div class="swappy-radios" role="radiogroup" aria-labelledby="swappy-radios-label">
        <h3 id="swappy-radios-label">{this.labelRadios}</h3>
        {this.optionsRadios.map(option => {
          console.log(option);
          return (<label>
            <input type="radio" name={this.nameRadios} on-click={(ev: CustomEvent) => this.onChangeRadio(ev)} />
            <span class="radio"></span>
            <span>{option}</span>
          </label>)
        })}
      </div>
    );
  }

}
