# ui-checkbox



<!-- Auto Generated Below -->


## Properties

| Property          | Attribute          | Description                        | Type      | Default     |
| ----------------- | ------------------ | ---------------------------------- | --------- | ----------- |
| `accessibleLabel` | `accessible-label` | Specifies the alternative text     | `string`  | `undefined` |
| `checked`         | `checked`          | Specifies if the input is checked  | `boolean` | `false`     |
| `disabled`        | `disabled`         | Specifies if checkbox is  disabled | `boolean` | `false`     |
| `identifier`      | `identifier`       | Specifies the native input id      | `string`  | `nanoid()`  |
| `name`            | `name`             | Specifies the native input name    | `string`  | `undefined` |
| `required`        | `required`         | Specifies if the input is required | `boolean` | `false`     |
| `value`           | `value`            | Specifies the input value          | `string`  | `undefined` |


## Events

| Event            | Description                           | Type                               |
| ---------------- | ------------------------------------- | ---------------------------------- |
| `checkboxBlur`   | Emmited when the checkbox loses focus | `CustomEvent<CheckboxEventDetail>` |
| `checkboxChange` | Emmited when the checkbox has changed | `CustomEvent<CheckboxEventDetail>` |
| `checkboxFocus`  | Emmited when the checkbox has focus   | `CustomEvent<CheckboxEventDetail>` |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
