import {
    Component,
    Prop,
    h,
    Host,
    Element,
    Event,
    EventEmitter,
    Watch,
} from '@stencil/core';

@Component({
    tag: 'ui-tab',
    styleUrl: 'tab.scss',
    shadow: false,
    scoped: true,
})
export class Tab {
    /**
     * Host element
     */
    @Element() hostElement: HTMLElement;

    /**
     * Specifies the aria-controls attribute for the native button
     */
    @Prop() accessibleControls?: string;

    /**
     * Specifies the alternative text
     */
    @Prop() accessibleLabel?: string;

    /**
     * Specifies if the tab is disabled
     */
    @Prop() disabled?: boolean = false;

    /**
     * Specifies the native button id
     */
    @Prop() identifier?: string;

    /**
     * Specifies if the tab is selected
     */
    @Prop() selected?: boolean = false;

    /**
     * Emmited when the button has been clicked
     */
    @Event() tabSelect: EventEmitter<void>;

    @Watch('selected')
    selectedWatch(newValue: boolean): void {
        if (!this.disabled) {
            if (newValue) {
                const button: HTMLButtonElement =
                    this.hostElement.querySelector('button[role="tab"]');
                button.focus();
            }
        }
    }

    private onClickHandler = (): void => {
        this.tabSelect.emit();
    };

    classNames = (): Record<string, boolean> => {
        return {
            selected: !!this.selected,
        };
    };

    render() {
        return (
            <Host class={this.classNames()}>
                <button
                    aria-controls={this.accessibleControls}
                    aria-label={this.accessibleLabel}
                    aria-selected={String(this.selected)}
                    disabled={this.disabled}
                    id={this.identifier}
                    role="tab"
                    tabindex={this.disabled ? '-1' : this.selected ? '0' : '-1'}
                    type="button"
                    onClick={this.onClickHandler}
                >
                    <slot></slot>
                </button>
            </Host>
        );
    }
}
