import { Component, h, Host, Listen, Element, Prop } from '@stencil/core';

import { KeyboardKeys } from '../../../core/types';

@Component({
    tag: 'ui-tabs',
    styleUrl: 'tabs.scss',
    shadow: false,
    scoped: true,
})
export class Tabs {
    /**
     * Host element
     */
    @Element() hostElement: HTMLElement;

    /**
     * Specifies the identifier for the initial selected tab
     */
    @Prop() selectedTab?: string;

    /**
     * Specifies if tab list is displayed vertically
     */
    @Prop() vertical?: boolean = false;

    @Listen('tabSelect')
    onTabSelected(event: CustomEvent<void>): void {
        const currentTab = event.target as HTMLUiTabElement;
        this.selectTab(currentTab);
    }

    @Listen('keydown')
    keydownHandler(event: KeyboardEvent): void {
        const target = event.target as HTMLElement;

        if (target.getAttribute('role') !== 'tab' || event.altKey) {
            return;
        }

        const key = event.key.toLowerCase();

        const previousKey = this.vertical
            ? KeyboardKeys.ARROW_UP
            : KeyboardKeys.ARROW_LEFT;
        const nextKey = this.vertical
            ? KeyboardKeys.ARROW_DOWN
            : KeyboardKeys.ARROW_RIGHT;

        switch (key) {
            case previousKey.toLowerCase():
                event.preventDefault();
                this.selectPreviousTab();
                break;
            case nextKey.toLowerCase():
                event.preventDefault();
                this.selectNextTab();
                break;
            default:
                break;
        }
    }

    private reset = (): void => {
        this.hostElement
            .querySelectorAll('ui-tab')
            .forEach(
                (currentTab: HTMLUiTabElement) => (currentTab.selected = false),
            );
        this.hostElement
            .querySelectorAll('ui-tab-panel')
            .forEach(
                (currentPanel: HTMLElement) => (currentPanel.hidden = true),
            );
    };

    private getPanelByTab = (tab: HTMLUiTabElement): HTMLUiTabPanelElement => {
        return this.hostElement.querySelector(
            `ui-tab-panel[identifier="${tab.accessibleControls}"]`,
        );
    };

    private getEnabledTabs = (): HTMLUiTabElement[] => {
        return Array.from(
            this.hostElement.querySelectorAll('ui-tab:not([disabled])'),
        );
    };

    private selectTab(tab: HTMLUiTabElement): void {
        if (!tab.selected) {
            this.reset();
            const panel: HTMLUiTabPanelElement = this.getPanelByTab(tab);

            tab.selected = true;
            panel.hidden = false;
        }
    }

    private selectPreviousTab(): void {
        const tabs: HTMLUiTabElement[] = this.getEnabledTabs();
        const index =
            tabs.findIndex(
                (currentTab: HTMLUiTabElement) => currentTab.selected,
            ) - 1;
        const tab = tabs[(index + tabs.length) % tabs.length];
        this.selectTab(tab);
    }

    private selectNextTab(): void {
        const tabs: HTMLUiTabElement[] = this.getEnabledTabs();
        const index =
            tabs.findIndex(
                (currentTab: HTMLUiTabElement) => currentTab.selected,
            ) + 1;
        const tab = tabs[index % tabs.length];
        this.selectTab(tab);
    }

    componentWillLoad(): void {
        const tabs: HTMLUiTabElement[] = this.getEnabledTabs();

        const index = tabs.findIndex(
            (currentTab: HTMLUiTabElement) =>
                this.selectedTab && this.selectedTab === currentTab.identifier,
        );
        const tab = tabs[index !== -1 ? index : 0];

        this.selectTab(tab);
    }

    classNames = (): Record<string, boolean> => {
        return {
            vertical: !!this.vertical,
        };
    };

    render() {
        return (
            <Host class={this.classNames()}>
                <div class="tab-list" role="tablist">
                    <slot name="tab"></slot>
                </div>
                <div>
                    <slot name="panel"></slot>
                </div>
            </Host>
        );
    }
}
