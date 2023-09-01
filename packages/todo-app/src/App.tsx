import './App.css'
import { UiHelloworld, defineCustomElements } from 'ui-kit-react';

defineCustomElements();

function App() {
  return (
    <>
      <div>
        <UiHelloworld firstName='Pepito'></UiHelloworld>
      </div>
    </>
  )
}

export default App
