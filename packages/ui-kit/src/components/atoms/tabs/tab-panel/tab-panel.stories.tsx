import { withActions } from '@storybook/addon-actions/decorator';

import mdx from './tab-panel.mdx';

export default {
    title: 'Components/Atoms/Tabs/Tab Panel',
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
<ui-tab-panel accesible-labelled-by="${args.accessibleControls}"
    identifier="${args.identifier}">
    <div>Content</div>
</ui-tab-panel>
`;

export const TabPanel = Template.bind({});

TabPanel.args = {
    accessibleLabelledBy: 'tab-id',
    identifier: 'tabpanel-id',
};

TabPanel.argTypes = {};
