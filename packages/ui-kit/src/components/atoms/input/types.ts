export enum InputTypeHTMLAttributte {
    Text = 'text',
    Password = 'password',
    Email = 'email',
}

export type InputType = `${InputTypeHTMLAttributte}`;

export interface InputEventDetail {
    originalEvent: Event;
    value: string;
}
