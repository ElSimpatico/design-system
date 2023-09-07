import { withActions } from '@storybook/addon-actions/decorator';

import mdx from './button.mdx';

import { ButtonTypeHTMLAttributte, ButtonVariants } from './types';

export default {
    title: 'Components/Atoms/Button',
    parameters: {
        docs: {
            page: mdx,
        },
        actions: {
            handles: ['buttonClick'],
        },
    },
    decorators: [withActions],
};

const Template = (args) => `
<ui-button accessible-label="${args.accessibleLabel}" disabled="${args.disabled}" type="${args.type}" variant="${args.variant}">
    <span>Click!</span>
</ui-button>
`;

export const Button = Template.bind({});

Button.args = {
    accessibleLabel: 'Call to action',
    disabled: false,
    type: ButtonTypeHTMLAttributte.Button,
    variant: ButtonVariants.Primary,
};

Button.argTypes = {
    variant: {
        control: { type: 'select' },
        options: Object.values(ButtonVariants),
    },
    type: {
        control: { type: 'select' },
        options: Object.values(ButtonTypeHTMLAttributte),
    },
};
