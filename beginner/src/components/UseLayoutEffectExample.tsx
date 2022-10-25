import { FC, useEffect, useLayoutEffect, useRef } from 'react'

// 這裡來補上在 useEffect 段落上示範的進階 custom hook --useFetch 中使用到的
// hook function. 
// 這邊示範用 useEffect 強制更改 input 內的值
const UseLayoutEffectExample: FC = () => {
  const inputRef = useRef<HTMLInputElement | null>(null)
  useEffect(() => {
    // console.log("UseEffect", inputRef.current);
    if(inputRef.current) {
      inputRef.current.value = "Tom"
      console.log("After useEffect", inputRef.current.value);
    }
  }, [inputRef.current])
  // 本質上使用與 useEffect 一樣，但他會比useEffect早觸發
  useLayoutEffect(() => {
    // console.log("UseLayoutEffect");
    console.log("UseLayoutEffect", inputRef.current?.value);
  }, [])
  return (
    <div>
      <h4>step 6: useLayoutEffect 概念</h4>
      <fieldset>
        <legend>透過 console 查看先後順序</legend>
        <input type="text" value="jack" readOnly ref={inputRef}/>
      </fieldset>
    </div>
  );
}

export default UseLayoutEffectExample
