import { FunctionalComponent, h } from '@stencil/core';

export const CheckmarkIcon: FunctionalComponent = () => {
    return (
        <svg
            style={{
                width: 'var(--size-checkbox, 2rem)',
                height: 'var(--size-checkbox, 2rem)',
            }}
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <g id="checkbox-checked">
                <rect
                    style={{
                        fill: 'var(--color-background-checkbox-checked, var(--color-action))',
                        rx: 'var(--radius-border-checkbox, 0.2rem)',
                        width: 'var(--size-checkbox, 2rem)',
                        height: 'var(--size-checkbox, 2rem)',
                    }}
                    id="Rectangle Copy 8"
                />
                <path
                    style={{
                        fill: 'var(--color-background-checkbox, var(--color-white))',
                    }}
                    id="Path"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M14.5711 6L15.9853 7.41421L8.91421 14.4853L8.828 14.399L8.74264 14.4853L4.5 10.2426L5.91421 8.82843L8.828 11.743L14.5711 6Z"
                />
            </g>
        </svg>
    );
};
