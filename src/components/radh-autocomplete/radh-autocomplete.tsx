import { Component, Element, Event, EventEmitter, Method, Prop, State, Watch, h } from '@stencil/core';


@Component({
    tag: 'radh-autocomplete',
    styleUrl: 'radh-autocomplete.css'
})
export class RadhAutocomplete {

    @Prop() items: string;

    @Prop() isAsync: boolean;

    @Prop() labelBy: string;

    @Prop() label: string;

    @Event() valueSelected: EventEmitter;

    @State() innerItems: Array<string>;

    @State() isOpen: boolean;

    @State() results: Array<string> = [];

    @State() search: string = '';

    @State() isLoading: boolean = false;

    @State() arrowCounter: number = 0;

    @State() activedescendant: string = '';

    @Element() el: HTMLElement;

    @Watch('items')
    itemsChanged(val: string) {
        if (val) {
            this.innerItems = JSON.parse(val);
            this.isLoading = false;
        }
    }


    onChange(ev) {
        this.search = ev.target ? ev.target.value : null;

        if (this.isAsync) {
            this.isLoading = true;
        } else {
            this.filterResults();
            this.isOpen = true;
        }
    }

    componentWillLoad() {
        this.innerItems = JSON.parse(this.items);
        this.closeOptions();
    }

    componentDidLoad() {
        document.addEventListener("click", this.handleClickOutside);
    }

    componentDidUnload() {
        document.removeEventListener("click", this.handleClickOutside);
    }

    filterResults() {
        this.results = this.innerItems.filter(item => {
            return item.toLowerCase().indexOf(this.search.toLowerCase()) > -1;
        })
    }

    setResult(result) {
        this.search = result;
        this.isOpen = false;

        this.valueSelected.emit(this.search);
    }

    @Method()
    async closeOptions() {
        this.isOpen = false;
        this.arrowCounter = -1;
    }

    onArrow(ev) {
        if (this.isOpen) {
            if (ev.which === 38) { //UP
                if (this.arrowCounter > 0) {
                    this.arrowCounter = this.arrowCounter - 1;
                    this.setActiveDescendent();
                }
            } else if (ev.which === 40) { //DOWN
                if (this.arrowCounter < this.results.length) {
                    this.arrowCounter = this.arrowCounter + 1;
                    this.setActiveDescendent();
                }
            }
        }
    }

    onKeyPress(ev) {
        if (ev.which === 13) { //ENTER
            this.search = this.results[this.arrowCounter];
            this.setResult(this.search);
            this.isOpen = false;
            this.arrowCounter = -1;
        }

    }

    handleClickOutside() {
        var radhAutocomplete = document.querySelector('radh-autocomplete');
        radhAutocomplete.componentOnReady().then(() => {
            radhAutocomplete.closeOptions();
        });
    }

    isSelected(index) {
        return index === this.arrowCounter;
    }

    setActiveDescendent() {
        this.activedescendant = this.getId(this.arrowCounter);
    }

    getId(index) {
        return `result-option-${index}`;
    }

    render() {
        if (this.items) {
            return (
                <div class="autocomplete" role="combobox" aria-expanded={this.isOpen ? 'true' : 'false'}>

                    <label htmlFor={this.labelBy} aria-label={this.labelBy}>{this.label}</label>

                    <input type="text"
                        id={this.labelBy}
                        onInput={(ev) => this.onChange(ev)}
                        onKeyPress={(ev) => this.onKeyPress(ev)}
                        onKeyDown={(ev) => this.onArrow(ev)}
                        aria-multiline="false"
                        role="searchbox"
                        aria-autocomplete="list"
                        aria-controls="autocomplete-results"
                        aria-activedescendant={this.activedescendant}
                        aria-labelledby={this.labelBy}
                        value={this.search}
                        title='Elige la fruta'
                        autocomplete="off"
                    ></input>

                    {this.isOpen
                        ? <ul id="autocomplete-results" class="autocomplete-results" role="listbox">
                            {this.isLoading
                                ? <li class="loading">Loading results</li>
                                : <span>{this.results.map((result, index) =>
                                    <li key={index} onClick={() => this.setResult(result)}
                                        role="option" id={this.getId(index)}
                                        aria-selected={this.isSelected(index)}
                                        class={'autocomplete-result' + (this.isSelected(index) ? ' is-active' : '')}>{result}</li>
                                )}</span>}
                        </ul>
                        : <span></span>}


                </div>
            );
        }
    }
}
