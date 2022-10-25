import { FC, useEffect, useState } from 'react'
import { useFetch } from '../hooks/useFetch';

const UseEffectExample: FC = () => {
  const [start, setStart] = useState<boolean>(false)
  const [count, setCount] = useState(0);
  // 這裡介紹另一個重點的 hook function，
  // 他是帶有 dependencies array，的 hook function
  // 但他的本質是處理 side Effect，like it's name
  // 算是比較複雜一點的 hook
  // 可以參考更詳細的解釋 https://dmitripavlutin.com/react-useeffect-explanation/
  useEffect(() => {
    // 這裡的第一個參數是擺 update function, 也就是我們一般想要自動某個 stateChange 事件的做法。
    if(start) {
      // 這裡會需要一個判斷是來做阻隔，以免造成無線迴圈
      // 接著就是你想要處理的 side effect
      const timer = window.setInterval(() => {
        setCount((pre) => pre + 1)
      }, 1000)
      // 這邊的return 代表的是原本 class component 的 componentWillUnmount() 的地方
      return () => window.clearInterval(timer)
    }
    // 第二個參數為 dependencies array，在陣列裡面的參數會使得 useEffect 去判斷該欄位的值是否需要更新，
    // 如果需要則會依據該參數是否更新而觸發第一個帶入的 update function 而執行重新渲染。
  }, [start])
  // 這裡留有一個比較進階的用法，也許可以解答一些人在使用這個 hook 所面臨到的問題。
  // 首先我們先做一個 custom hook 來模擬一般常用的情境，請各位照著檔案路徑移動到 useFetch 的檔案中查看
  const [url, setUrl] = useState<string | null>(null)
  const { data } = useFetch({url, onSuccess: () => console.log('succee')})

  return (
    <>
      <div className='f-b-c'>
        <h4>step 2: 非常重要的 side effect hook, 有進階的解釋與練習</h4>
      </div>
      <div className='f-b-c'>
        <p>
          {`計時器： ${count}`}
        </p>
        <button 
          onClick={() => setStart(!start)}
          style ={{
            margin: '0 1rem'
          }}
        >
          {start ? `暫停`:`開始`}
        </button>
        <button onClick={() => setCount(0)}>重置</button>
      </div>
      <div className='f-b-c'>
        <p>
          {JSON.stringify(data)}
        </p>
        <button onClick={() => setUrl('/peoples.json')}>表單資料</button>
        <button onClick={() => setUrl('/bello.json')}>帥哥資料</button>
      </div>
    </>
  )
}

export default UseEffectExample
