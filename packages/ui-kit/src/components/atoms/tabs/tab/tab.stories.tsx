import { withActions } from '@storybook/addon-actions/decorator';

import mdx from './tab.mdx';

export default {
    title: 'Components/Atoms/Tabs/Tab',
    parameters: {
        docs: {
            page: mdx,
        },
        actions: {
            handles: ['tabSelect'],
        },
    },
    decorators: [withActions],
};

const Template = (args) => `
<div role="tablist">
    <ui-tab accesible-controls="${args.accessibleControls}"
        accessible-label="${args.accessibleLabel}"
        disabled="${args.disabled}"
        identifier="${args.identifier}"
        selected="${args.selected}">
        <span>Tab Text</span>
    </ui-tab>
</div>
`;

export const Tab = Template.bind({});

Tab.args = {
    accessibleControls: 'tabpanel-id',
    accessibleLabel: 'Select tab text',
    disabled: false,
    identifier: 'button-id',
    selected: false,
};

Tab.argTypes = {};
