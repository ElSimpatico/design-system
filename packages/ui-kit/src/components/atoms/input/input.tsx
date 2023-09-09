import { Component, Prop, h, Host, Event, EventEmitter } from '@stencil/core';
import { nanoid } from 'nanoid';

import { InputEventDetail, InputType } from './types';

import { ErrorIcon } from './resources/error-icon';

@Component({
    tag: 'ui-input',
    styleUrl: 'input.scss',
    shadow: false,
    scoped: true,
})
export class Input {
    /** Specifies the alternative text for the label */
    @Prop() accessibleLabel?: string;

    /** Specifies if input is disabled */
    @Prop() disabled?: boolean = false;

    /** Specifies if the input state error is enabled*/
    @Prop() error?: boolean;

    /** Specifies the native input id */
    @Prop() identifier?: string = nanoid();

    /** Specifies the text for the label */
    @Prop() label?: string;

    /** Specifies the native input name */
    @Prop() name?: string;

    /** Specifies the hint text to display */
    @Prop() placeholder?: string;

    /** Specifies if the input is read-only */
    @Prop() readonly?: boolean = false;

    /** Specifies if the input is required */
    @Prop() required?: boolean = false;

    /** Specifies the input type ("text", "password", "email") */
    @Prop() type?: InputType = 'text';

    /** Specifies the input value */
    @Prop({ mutable: true }) value?: string;

    /** Emmited when the input has changed */
    @Event() inputChange: EventEmitter<InputEventDetail>;

    /** Emmited when the input has focus */
    @Event() inputFocus: EventEmitter<InputEventDetail>;

    /** Emmited when the input loses focus */
    @Event() inputBlur: EventEmitter<InputEventDetail>;

    private onChangeHandler = (event: Event): void => {
        const inputElement = event.target as HTMLInputElement;
        this.value = inputElement.value;

        this.inputChange.emit({
            originalEvent: event,
            value: this.value,
        });
    };

    private onFocusHandler = (event: Event): void => {
        this.inputFocus.emit({
            originalEvent: event,
            value: this.value,
        });
    };
    private onBlurHandler = (event: Event): void => {
        this.inputBlur.emit({
            originalEvent: event,
            value: this.value,
        });
    };

    classNames = (): Record<string, boolean> => {
        return {
            error: !!this.error,
        };
    };

    render() {
        return (
            <Host class={this.classNames()}>
                <div class="container">
                    <label
                        class="container__label"
                        aria-label={this.accessibleLabel}
                        htmlFor={this.identifier}
                    >
                        {this.label}
                    </label>

                    <div class="container__field field">
                        <input
                            class="field__input"
                            disabled={this.disabled}
                            id={this.identifier}
                            name={this.name}
                            placeholder={this.placeholder}
                            readOnly={this.readonly}
                            required={this.required}
                            type={this.type}
                            value={this.value}
                            onChange={this.onChangeHandler}
                            onFocus={this.onFocusHandler}
                            onBlur={this.onBlurHandler}
                        ></input>
                        {this.error && (
                            <div class="field__icon">
                                <ErrorIcon></ErrorIcon>
                            </div>
                        )}
                    </div>
                </div>
            </Host>
        );
    }
}
