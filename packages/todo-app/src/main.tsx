import React from 'react';
import ReactDOM from 'react-dom/client';

import { defineCustomElements } from 'ui-kit-react';
import 'ui-kit/dist/ui-kit/ui-kit.css';

import { App } from './App.tsx';

defineCustomElements();

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
);
