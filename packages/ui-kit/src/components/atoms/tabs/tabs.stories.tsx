import { withActions } from '@storybook/addon-actions/decorator';

import mdx from './tabs.mdx';

export default {
    title: 'Components/Atoms/Tabs',
    parameters: {
        docs: {
            page: mdx,
        },
        actions: {
            handles: [],
        },
    },
    decorators: [withActions],
};

const Template = (args) => `
<ui-tabs vertical="${args.vertical}" selected-tab="${args.selectedTab}">
    <ui-tab slot="tab" identifier="tab-1" accessible-controls="tabpanel-1">Tab one</ui-tab>
    <ui-tab slot="tab" identifier="tab-2" accessible-controls="tabpanel-2">Tab two</ui-tab>
    <ui-tab slot="tab" identifier="tab-3" accessible-controls="tabpanel-3">Tab three</ui-tab>

    <ui-tab-panel slot="panel" identifier="tabpanel-1" accessible-labelled-by="tab-1">Content one</ui-tab-panel>
    <ui-tab-panel slot="panel" identifier="tabpanel-2" accessible-labelled-by="tab-2">Content two</ui-tab-panel>
    <ui-tab-panel slot="panel" identifier="tabpanel-3" accessible-labelled-by="tab-3">Content three</ui-tab-panel>
</ui-tabs>
`;

export const Tabs = Template.bind({});

Tabs.args = {
    vertical: false,
    selectedTab: '',
};

Tabs.argTypes = {};
