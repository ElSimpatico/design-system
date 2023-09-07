export enum ButtonTypeHTMLAttributte {
    Button = 'button',
    Submit = 'submit',
    Reset = 'reset',
}

export enum ButtonVariants {
    Primary = 'primary',
    Alternative = 'alternative',
}

export type ButtonVariantType = `${ButtonVariants}`;
export type ButtonType = `${ButtonTypeHTMLAttributte}`;
