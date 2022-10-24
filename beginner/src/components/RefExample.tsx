import { ChangeEvent, FC, useRef, useState } from 'react'

// 在開始之前我先示範一個先前教過的 useState 綁定 input 範例
const RefExample: FC = () => {
  // useState 的做法
  const [state, setState] = useState<string>('')
  const onStateChange = (e: ChangeEvent<HTMLInputElement>) => {
    setState(e.target.value)
  }
  
  // useRef 的差異
  // 你可以想像他為useState的進階用法，
  // 用它來處理表單的好處就是能夠有效控制重複拿取state的問題，
  // 可以優化react的運行。
  const inputRef = useRef<HTMLInputElement>(null);

  // 當你打開以下兩個 console 的時候你就能理解為何會說他能優化的部分了
  // console.log('with state',state);
  // console.log('ref', inputRef);
  
  // 如果是用 state 綁定的話，所有的 setState 會促使 component 觸發 reredning
  // 但一樣的東西改用 useRef 來做的話，他就只是單純綁定在你設定的 html tag 之下，
  // 等到你需要觸發使用該值的時候，才會去更動 current 內的資料進行 rerending
  // 詳細文章支援： https://medium.com/hannah-lin/react-hook-%E7%AD%86%E8%A8%98-useref-c628cbf0d7fb
  return (
    <div>
      <div><h4>step 4: useRef 使用差異</h4></div>
      <fieldset>
        <legend>用 useState 綁定</legend>
        <input 
          type="text" 
          value={state}
          onChange={onStateChange}
        />
        <button 
          onClick={() => console.log(state)}
          style={{
            margin: '0 1rem'
          }}
        >
          check
        </button>
      </fieldset>    
      <fieldset>
        <legend>用 useState 綁定</legend>
        <input 
          type="text" 
          ref={inputRef}
        />
        <button 
          onClick={() => console.log(inputRef.current?.value)}
          style={{
            margin: '0 1rem'
          }}
        >
          check
        </button>
      </fieldset>    
    </div>
  )
}

export default RefExample
