import { useState } from "react"
import ContextExample from "./components/ContextExample";
import Counter from "./components/Counter";
import FormExample from "./components/FormExample";
import RefExample from "./components/RefExample";
import UseEffectExample from "./components/UseEffectExample";

const username = 'Luciano';

function App() {

  return (
    <div>
      <h2>
        Hello {username}!
      </h2>
      <Counter user={username} />
      <UseEffectExample />
      <FormExample />
      <RefExample />
      <ContextExample />
    </div>
  )
}

export default App
