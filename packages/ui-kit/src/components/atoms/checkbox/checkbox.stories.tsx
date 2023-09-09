import { withActions } from '@storybook/addon-actions/decorator';

import mdx from './checkbox.mdx';

export default {
    title: 'Components/Atoms/Checkbox',
    parameters: {
        docs: {
            page: mdx,
        },
        actions: {
            handles: ['checkboxChange', 'checkboxFocus', 'checkboxBlur'],
        },
    },
    decorators: [withActions],
};

const Template = (args) => `
<ui-checkbox accessible-label="${args.accessibleLabel}"
    checked="${args.checked}"
    disabled="${args.disabled}"
    identifier="${args.identifier}"
    name="${args.name}"
    required="${args.required}"
    value="${args.value}">
</ui-checkbox>
`;

const TemplateExamples = () => `
<div>
    <h2>Checkboxes</h2>
    <ui-checkbox accessible-label="Checkbox example 1"></ui-checkbox>
    <ui-checkbox accessible-label="Checkbox example 2"><span>Text Label</span></ui-checkbox>
    <ui-checkbox accessible-label="Checkbox example 3"><span>Text Label. Click <a href="www.google.es">here</a> to show more info</span></ui-checkbox>
</div>
<div>
    <h2>Multiples choices</h2>
    <form>
        <fieldset>
            <legend>What are your options?</legend>
            <ui-checkbox accessible-label="Checkbox example 2.1" name="option-filter" value="o1">Option 1</ui-checkbox>
            <ui-checkbox accessible-label="Checkbox example 2.2" name="option-filter" value="o2">Option 2</ui-checkbox>
            <ui-checkbox accessible-label="Checkbox example 2.3" name="option-filter" value="o3">Option 3</ui-checkbox>
        </fieldset>
        <br/>
        <ui-button type="submit">Send</ui-button>
    </form>
</div>
`;

export const Checkbox = Template.bind({});

Checkbox.args = {
    accessibleLabel: 'Checkbox accesible label',
    checked: false,
    disabled: false,
    identifier: 'input-id',
    name: 'input-name',
    required: false,
    value: 'input-value',
};

Checkbox.argTypes = {};

export const CheckboxExamples = TemplateExamples.bind({});
