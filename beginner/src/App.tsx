import { useState } from "react"

const username = 'Luciano';

function App() {
  // 這個是最基本的 state hook
  const [count, setCount] = useState<number>(0);
  // 有以下兩種方式來做 state change，細微上的不同會再進階的課程中提及
  const minus = () => setCount(count - 1);
  const plus = () => setCount((pre) => pre + 1);
  let num = 0;
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
      <h5>假設不用</h5>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: "space-around"
        }}
      >
        <button 
          onClick={() => {
            num = num - 1
            // console.log(num);
            // 這裡的做法是沒有辦法完成更新的，呼應前面所講的，react 本身就是採一個 V-dom
            // 所以你的指向必須指到 component 本身，那麼以 functional component 的型態
            // 來說就必須使用 useState hook 達成。
            // 相同的概念回到 class component 的寫法就會很清楚了，但這裡我不多著墨。
            return num;
          }}
        >
            -
        </button>
        <p>{num}</p>
        <button onClick={() => num + 1}>+</button>
      </div>
    </div>
  )
}

export default App
