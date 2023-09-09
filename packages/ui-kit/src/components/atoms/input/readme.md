# ui-input



<!-- Auto Generated Below -->


## Properties

| Property          | Attribute          | Description                                            | Type                              | Default     |
| ----------------- | ------------------ | ------------------------------------------------------ | --------------------------------- | ----------- |
| `accessibleLabel` | `accessible-label` | Specifies the alternative text for the label           | `string`                          | `undefined` |
| `disabled`        | `disabled`         | Specifies if input is disabled                         | `boolean`                         | `false`     |
| `error`           | `error`            | Specifies if the input state error is enabled          | `boolean`                         | `undefined` |
| `identifier`      | `identifier`       | Specifies the native input id                          | `string`                          | `nanoid()`  |
| `label`           | `label`            | Specifies the text for the label                       | `string`                          | `undefined` |
| `name`            | `name`             | Specifies the native input name                        | `string`                          | `undefined` |
| `placeholder`     | `placeholder`      | Specifies the hint text to display                     | `string`                          | `undefined` |
| `readonly`        | `readonly`         | Specifies if the input is read-only                    | `boolean`                         | `false`     |
| `required`        | `required`         | Specifies if the input is required                     | `boolean`                         | `false`     |
| `type`            | `type`             | Specifies the input type ("text", "password", "email") | `"email" \| "password" \| "text"` | `'text'`    |
| `value`           | `value`            | Specifies the input value                              | `string`                          | `undefined` |


## Events

| Event         | Description                        | Type                            |
| ------------- | ---------------------------------- | ------------------------------- |
| `inputBlur`   | Emmited when the input loses focus | `CustomEvent<InputEventDetail>` |
| `inputChange` | Emmited when the input has changed | `CustomEvent<InputEventDetail>` |
| `inputFocus`  | Emmited when the input has focus   | `CustomEvent<InputEventDetail>` |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
