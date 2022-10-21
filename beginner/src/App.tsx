import { useState } from "react"
import Counter from "./components/Counter";
import FormExample from "./components/FormExample";
import UseEffectExample from "./components/UseEffectExample";

const username = 'Luciano';

function App() {

  return (
    <div>
      <h2>
        Hello {username}!
      </h2>
      <Counter user={username} />
      <UseEffectExample/>
      <FormExample/>
    </div>
  )
}

export default App
