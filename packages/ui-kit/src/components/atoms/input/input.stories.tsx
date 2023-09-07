import { withActions } from '@storybook/addon-actions/decorator';

import mdx from './input.mdx';
import { InputTypeHTMLAttributte } from './types';

export default {
    title: 'Components/Atoms/Input',
    parameters: {
        docs: {
            page: mdx,
        },
        actions: {
            handles: ['inputChange', 'inputFocus', 'inputBlur'],
        },
    },
    decorators: [withActions],
};

const Template = (args) => `
<ui-input accessible-label="${args.accessibleLabel}"
    disabled="${args.disabled}"
    error="${args.error}"
    identifier="${args.identifier}"
    label="${args.label}"
    name="${args.name}"
    placeholder="${args.placeholder}"
    readonly="${args.readonly}"
    required="${args.required}"
    type="${args.type}"
    value="${args.value}">
</ui-input>
`;

export const Input = Template.bind({});

Input.args = {
    accessibleLabel: 'Input label',
    disabled: false,
    error: false,
    identifier: 'input-id',
    label: 'Label',
    name: 'input-name',
    placeholder: 'Placeholder',
    readonly: false,
    required: false,
    type: InputTypeHTMLAttributte.Text,
    value: '',
};

Input.argTypes = {
    type: {
        control: { type: 'select' },
        options: Object.values(InputTypeHTMLAttributte),
    },
};
