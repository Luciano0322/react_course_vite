import { FC, useState } from 'react'

// 這裡示範簡單的 component 拆分與 props 的定義方法
const Counter: FC<{user: string}> = ({user}) => {
  // {user} 也可以單改用 props 去接，但在引用的同時會多一層
  // 這個是最基本的 state hook
  const [count, setCount] = useState<number>(0);
  // 有以下兩種方式來做 state change，細微上的不同會再進階的課程中提及
  const minus = () => setCount(count - 1);
  const plus = () => setCount((pre) => pre + 1);
  return (
    <>
      <h5>{`${user} play counter`}</h5>
      <h4>step 1: 這是 react 中最常用也最容易搞懂的 hook</h4>
      <div
        className='f-b-c'
      >
        <button onClick={minus}>-</button>
        <p>{count}</p>
        <button onClick={plus}>+</button>
      </div>
    </>
  )
}

export default Counter
