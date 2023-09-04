import './App.css';
import 'ui-kit/dist/ui-kit/ui-kit.css';
import { defineCustomElements, UiHelloworld, UiButton } from 'ui-kit-react';

defineCustomElements();

function App() {
    return (
        <>
            <div>
                <UiHelloworld firstName="Pepito"></UiHelloworld>
                <UiButton accessibleLabel="Call to action">
                    call to action
                </UiButton>
            </div>
        </>
    );
}

export default App;
