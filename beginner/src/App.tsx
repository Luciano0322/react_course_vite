import { useState } from "react"
import ContextExample from "./components/ContextExample";
import Counter from "./components/Counter";
import FormExample from "./components/FormExample";
import ImperativeHandleExp from "./components/ImperativeHandleExp";
import MemoExample from "./components/MemoExample";
import RefExample from "./components/RefExample";
import UseEffectExample from "./components/UseEffectExample";
import UseLayoutEffectExample from "./components/UseLayoutEffectExample";

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
      <UseLayoutEffectExample />
      <ImperativeHandleExp />
      <MemoExample />
    </div>
  )
}

export default App
