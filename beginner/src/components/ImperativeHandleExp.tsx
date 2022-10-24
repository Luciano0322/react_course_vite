import React, { useRef } from 'react'
import ForwardRefBtn, { ForwardRefBtnHandle } from './ForwardRefBtn';

// 這個 hook function 主要是提供子層傳母層資料的功能
// 一般來說以創造自己的 UI library 為主要使用場景，
// 這部分可以參考我過去寫過 it 邦鐵人賽文章，有關 material UI 的應用
// 在拆分這類的 component library 的時候會蠻頻繁使用這些 hook function
const ImperativeHandleExp = () => {
  // 主要使用這個 hook 會在 ForwardRefBtn 的這個 component 裏面
  const btnRef = useRef<ForwardRefBtnHandle>(null)

  return (
    <>
      <h4>step 7: ForwardRef & useImperativeHandle 的示範</h4>
      <div className='f-b-c'>
        <button onClick={() => {
          if(btnRef.current)
          btnRef.current.alterToggle();
        }}>
          母層按鈕
        </button>
        <ForwardRefBtn ref={btnRef} />
      </div>
    </>
  )
}

export default ImperativeHandleExp
