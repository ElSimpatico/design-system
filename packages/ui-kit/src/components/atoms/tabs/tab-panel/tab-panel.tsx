import { Component, Prop, h, Host } from '@stencil/core';

@Component({
    tag: 'ui-tab-panel',
    styleUrl: 'tab-panel.scss',
    shadow: false,
    scoped: true,
})
export class TabPanel {
    /**
     * Specifies id's that indicate alternative labels elements
     */
    @Prop() accessibleLabelledBy?: string;

    /**
     * Specifies the id of the tabpanel element
     */
    @Prop() identifier?: string;

    render() {
        return (
            <Host>
                <div
                    aria-labelledby={this.accessibleLabelledBy}
                    id={this.identifier}
                    role="tabpanel"
                    tabindex="0"
                >
                    <slot></slot>
                </div>
            </Host>
        );
    }
}
