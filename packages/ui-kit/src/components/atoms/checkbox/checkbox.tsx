import { Component, Prop, h, Host, Event, EventEmitter } from '@stencil/core';

import { nanoid } from 'nanoid';

import { CheckmarkIcon } from './resources/checkmark';
import { CheckboxEventDetail } from './types';

@Component({
    tag: 'ui-checkbox',
    styleUrl: 'checkbox.scss',
    shadow: false,
    scoped: true,
})
export class Checkbox {
    /** Specifies the alternative text */
    @Prop() accessibleLabel?: string;

    /** Specifies if the input is checked */
    @Prop({ mutable: true }) checked?: boolean = false;

    /** Specifies the native input id */
    @Prop() identifier?: string = nanoid();

    /** Specifies if checkbox is  disabled */
    @Prop() disabled?: boolean = false;

    /** Specifies the native input name */
    @Prop() name?: string;

    /** Specifies if the input is required */
    @Prop() required?: boolean = false;

    /** Specifies the input value */
    @Prop() value?: string;

    /** Emmited when the checkbox has changed */
    @Event() checkboxChange: EventEmitter<CheckboxEventDetail>;

    /** Emmited when the checkbox has focus */
    @Event() checkboxFocus: EventEmitter<CheckboxEventDetail>;

    /** Emmited when the checkbox loses focus */
    @Event() checkboxBlur: EventEmitter<CheckboxEventDetail>;

    private onChangeHandler = (event: Event): void => {
        const inputElement = event.target as HTMLInputElement;
        this.checked = inputElement.checked;

        this.checkboxChange.emit({
            checked: this.checked,
            value: this.value,
            originalEvent: event,
        });
    };

    private onFocusHandler = (event: Event): void => {
        this.checkboxFocus.emit({
            checked: this.checked,
            value: this.value,
            originalEvent: event,
        });
    };

    private onBlurHandler = (event: Event): void => {
        this.checkboxBlur.emit({
            checked: this.checked,
            value: this.value,
            originalEvent: event,
        });
    };

    classNames = (): Record<string, boolean> => {
        return {};
    };

    render() {
        return (
            <Host class={this.classNames()}>
                <input
                    checked={this.checked}
                    disabled={this.disabled}
                    id={this.identifier}
                    name={this.name}
                    type="checkbox"
                    required={this.required}
                    value={this.value}
                    onChange={this.onChangeHandler}
                    onFocus={this.onFocusHandler}
                    onBlur={this.onBlurHandler}
                ></input>

                <label
                    class="input-label"
                    htmlFor={this.identifier}
                    aria-label={this.accessibleLabel}
                >
                    <div class="input-label__box">
                        {this.checked && <CheckmarkIcon />}
                    </div>
                    <slot></slot>
                </label>
            </Host>
        );
    }
}
