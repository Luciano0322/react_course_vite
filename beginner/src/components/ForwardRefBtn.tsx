import React, { forwardRef, useImperativeHandle, useState } from 'react'

type ForwardRefBtnProps = {}

export type ForwardRefBtnHandle = {
  alterToggle: () => void,
}

// 順序上要注意 typescript 的順序與 forwardRef() 內傳入的順序剛好相反
const ForwardRefBtn = forwardRef<ForwardRefBtnHandle, ForwardRefBtnProps>((props, ref) => {
  // 提列ref的時候需要用到forwardRef包裝整個component，記得ref要在props之後。
  const [toggle, setToggle] = useState<boolean>(false);
  // 這個hook可以自訂義要從ref裡面提列的key，也就是說可以從父層拿到子層的func || state
  useImperativeHandle(ref, () => ({
    alterToggle() {
      setToggle(!toggle)
    }
  }))
  return (
    <>
      <button
        // 這裡註解掉會讓控制權交還給母層
        // onClick={() => {
        //   setToggle(!toggle)
        // }}
      >
        子層按鈕
      </button>
      {toggle && <span>What's up</span>}
    </>
  );
})

export default ForwardRefBtn
