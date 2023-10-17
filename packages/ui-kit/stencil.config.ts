import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';
import { reactOutputTarget } from '@stencil/react-output-target';
import { resolve } from 'path';

export const config: Config = {
    namespace: 'ui-kit',
    outputTargets: [
        {
            type: 'dist',
            esmLoaderPath: '../loader',
            copy: [
                {
                    src: 'assets',
                    dest: 'assets',
                },
                {
                    src: 'scss',
                    dest: 'scss',
                },
            ],
        },
        {
            type: 'dist-custom-elements',
        },
        {
            type: 'docs-readme',
        },
        {
            type: 'www',
            serviceWorker: null, // disable service workers
        },
        reactOutputTarget({
            componentCorePackage: 'ui-kit',
            proxiesFile:
                '../ui-kit-react/lib/components/stencil-generated/index.ts',
        }),
    ],
    globalStyle: resolve(__dirname, 'src/scss/main.scss'),

    plugins: [
        sass({
            injectGlobalPaths: [
                'src/scss/abstracts/_mixins.scss',
                'src/scss/abstracts/_variables.scss',
            ],
        }),
    ],

    testing: {
        browserHeadless: 'new',
    },
};
