import { useState } from "react"
import Counter from "./components/Counter";
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
    </div>
  )
}

export default App
