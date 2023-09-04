import { Component, Prop, h, Host } from '@stencil/core';
import { ButtonVariantTypes } from './types';

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
    @Prop() type?: string = 'button';

    /**
     * Specfifies the button variant
     */
    @Prop() variant?: ButtonVariantTypes = 'primary';

    classNames = (): Record<string, boolean> => {
        return {
            primary: this.variant === 'primary',
            alternative: this.variant === 'alternative',
        };
    };

    render() {
        return (
            <Host class={this.classNames()}>
                <button disabled={this.disabled}>
                    <slot></slot>
                </button>
            </Host>
        );
    }
}
