import { useState } from "react"

const username = 'Luciano';

function App() {
  // 這個是最基本的 state hook
  const [count, setCount] = useState<number>(0);
  // 有以下兩種方式來做 state change，細微上的不同會再進階的課程中提及
  const minus = () => setCount(count - 1);
  const plus = () => setCount((pre) => pre + 1);
  return (
    <div>
      Hello {username}!
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: "space-around"
        }}
      >
        <button onClick={minus}>-</button>
        <p>{count}</p>
        <button onClick={plus}>+</button>
      </div>
    </div>
  )
}

export default App
