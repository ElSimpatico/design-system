import { Component, Prop, h, Host, EventEmitter, Event } from '@stencil/core';
import { ButtonVariantType, ButtonType } from './types';

@Component({
    tag: 'ui-button',
    styleUrl: 'button.scss',
    shadow: false,
    scoped: true,
})
export class Button {
    /**
     * Specifies the alternative text
     */
    @Prop() accessibleLabel?: string;

    /**
     * Specifies if button is  disabled
     */
    @Prop() disabled?: boolean = false;

    /**
     * Specifies the type attribute for the native button ("button", "submit", "reset").
     */
    @Prop() type?: ButtonType = 'button';

    /**
     * Specfifies the button variant
     */
    @Prop() variant?: ButtonVariantType = 'primary';

    /** Emmited when button has been clicked */
    @Event() buttonClick: EventEmitter<void>;

    private onClickHandler = (): void => {
        this.buttonClick.emit();
    };

    classNames = (): Record<string, boolean> => {
        return {
            primary: this.variant === 'primary',
            alternative: this.variant === 'alternative',
        };
    };

    render() {
        return (
            <Host class={this.classNames()}>
                <button
                    disabled={this.disabled}
                    type={this.type}
                    onClick={this.onClickHandler}
                >
                    <slot></slot>
                </button>
            </Host>
        );
    }
}
