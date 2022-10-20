import { useState } from "react"
import Counter from "./components/Counter";

const username = 'Luciano';

function App() {

  return (
    <div>
      <h2>
        Hello {username}!
      </h2>
      <Counter user={username} />
    </div>
  )
}

export default App
