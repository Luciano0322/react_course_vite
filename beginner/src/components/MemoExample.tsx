import React, { memo, useCallback, useMemo, useState } from 'react'

// 子層接 props 參數，觸發渲染
// React.memo
// const Swatch = ({ color }:{ color: string }) => {
// useMemo example
const Swatch = ({ 
    params,
    onClick // for useCallback
  }:{ 
    params: {
      color: string
    },
    onClick: () => void // for useCallback
  }) => {
  console.log(`Swatch 渲染 ${params.color}`);
  
  return (
    <div 
      style={{
        margin: '1rem',
        width: 75,
        height: 75,
        borderRadius: '50%',
        backgroundColor: params.color,
      }} 
      onClick={onClick}
    />
  )
}

// 使用 react.memo
// react.memo 本身就是一個 H.O.C. 的形式，不情楚 HOC 的朋友可以搜尋 react HOC
const MemoedSwatch = memo(Swatch)
// 在引入上面的 MemoedSwatch 之後會發現原先重複渲染的問題消失了，
// component props 進去的值沒有改變的話就不會觸發重新渲染
// 當傳入值由 string 改為 object 的型態時，React.memo 的解決辦法如下
// const MemoedSwatch = memo(Swatch, (prevProps, nextProps) => {
//   return prevProps.params.color === nextProps.params.color;
// });

// 母層
// 預設一開始情況下會發現每次按按鈕都會使子曾也重新渲染，
// 即使 props 的值根本沒變
const MemoExample = () => {
  const [appRenderIdx, setAppRenderIdx] = useState<number>(0)
  // 為了方便示範效果做了一個換顏色的按鈕，
  // 這裡可以看到當換顏色的按鈕按下之後，才會觸發 MemoedSwatch 重新渲染
  // *React.memo 其實並不等於 js memorize, 本質上是當 props 的值有更改時才會重新渲染*
  const [color, setColor] = useState<string>('red')
  console.log(`Memo 渲染次數 ${appRenderIdx}`);
  
  // useMemo 的範例
  // 後面的 dependency array 和 useEffect 的概念是一樣的
  // 也是採用 shallow compare 的比較機制
  const params = useMemo(() => ({ color }), [color])
  // useCallback 的範例
  const onClick = useCallback(() => {},[]) 

  return (
    <div>
      <h4>step 8: Memo & useMemo & useCallback 範例</h4>
      <div className='f-b-c'>
        <button 
          onClick={() => setAppRenderIdx(appRenderIdx + 1)}
        >
          重新渲染
        </button>
        <button
          onClick={() => setColor(color === 'red' ? 'blue' : 'red')}
        >
          換顏色
        </button>
      </div>
      {/* default */}
      {/* <Swatch color='red' /> */}
      {/* with Memo */}
      <MemoedSwatch 
        params={params} 
        onClick={onClick} //for useCallback
      />
    </div>
  )
}

export default MemoExample

// 考量使用 useMemo 的時機，基本上掌握要點
// 1. 基本上資料型別不要單單只是 by value 的資料型別
// 2. 回傳資料為物件、陣列
// 3. 回傳資料會因帶入參數重組產稱新的值

// 使用 useCallback 的時機點
// 1. 當你需要回傳相同的 function 的時候
// 2. useMemo 用來處理陣列 & 物件，useCallback 用來處理 function
