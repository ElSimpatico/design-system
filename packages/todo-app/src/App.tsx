import './App.css'
import { MyComponent, defineCustomElements } from 'ui-kit-react';

defineCustomElements();

function App() {
  return (
    <>
      <div>
        <MyComponent first='Your' last="Name"></MyComponent>
      </div>
    </>
  )
}

export default App
