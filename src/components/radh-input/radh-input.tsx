import { Component, Prop, Event, EventEmitter, h } from '@stencil/core';
import { Validator, defaultValidator, ValidatorEntry, getValidator } from '../../validators';


@Component({
    tag: 'radh-input',
    styleUrl: 'radh-input.css'
})
export class RadhInput {

    @Prop({ mutable: true }) value: string;
    @Prop() validator: Array<string | ValidatorEntry | Validator<string>>;

    @Event() changed: EventEmitter<string>;

    _validator: Validator<string> = defaultValidator;

    componentWillLoad() {
        this._validator = getValidator(this.validator);
    }

    componentWillUpdate() {
        this._validator = getValidator(this.validator);
    }

    handleChange(ev) {
        this.value = ev.target ? ev.target.value : null;
        this.changed.emit(this.value);
    }

    render() {
        console.log(this._validator, this._validator.validate(this.value));
        return (
            <div>
                <div class="input-container">
                    <input value={this.value} onInput={(ev) => this.handleChange(ev)}></input>
                </div>
                {!this._validator.validate(this.value) ?
                    <span class="validation-error">{this._validator.errorMessage}</span>
                    : null
                }
            </div>
        );
    }
}
