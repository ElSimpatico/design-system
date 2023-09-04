import mdx from './button.mdx';

import { ButtonVariants } from './types';

export default {
    title: 'Components/Atoms/Button',
    parameters: {
        docs: {
            page: mdx,
        },
    },
};

const Template = (args) => `
<ui-button accessible-label="${args.accessibleLabel}" disabled="${args.disabled}" type="${args.type}" variant="${args.variant}">
    <span>Click!</span>
</ui-button>
`;

export const Button = Template.bind({});

console.log(ButtonVariants);

Button.args = {
    accessibleLabel: 'Call to action',
    disabled: false,
    type: 'button',
    variant: ButtonVariants.Primary,
};

Button.argTypes = {
    variant: {
        control: { type: 'select' },
        options: Object.values(ButtonVariants),
    },
};
