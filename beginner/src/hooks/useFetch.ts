import { useEffect, useLayoutEffect, useRef, useState } from "react"

const useCallbackRef = (callback: any) => {
  const callbackRef = useRef(callback)
  useLayoutEffect(() => {
    callbackRef.current = callback
  }, [callback]);
}

export const useFetch = (options: any) => {
  const [data, setData] = useState(null)
  // for onSuccess
  const savedOnSuccess = useCallbackRef(options.onSuccess)

  // 這個 hook 之後有機會會提到，簡單來說他會比 useEffect 執行來得早一點
  // useLayoutEffect(() => {
  //   savedOnSuccess.current = options.onSuccess
  // }, [options.onSuccess]);
  // 這裡我把它拆出在上面來執行

  // 一般常見的錯誤用法：沒有給他 dependencies array
  // useEffect(() => {
  //   console.log('useFetch useEffect');
  //   fetch(options.url)
  //   .then((res) => res.json())
  //   .then(setData)
  // })
  // 拿一次的解套方案
  // useEffect(() => {
  //   console.log('useFetch useEffect');
  //   fetch(options.url)
  //   .then((res) => res.json())
  //   .then((json) => setData(json))
  // },[])
  // 讓他能夠依據帶入的參數改變拿取的 api url，讓這個 custom hook 更具有彈性
  // 下面的範例也是一個常見的錯誤
  // useEffect(() => {
  //   if(options.url) {
  //     console.log('useFetch useEffect');
  //     fetch(options.url)
  //     .then((res) => res.json())
  //     .then((json) => setData(json))
  //   }
  // },[options])
  // 這個錯誤很常見，主要是 javascript 本身比較機制的問題，在 dependencies array 中的機制採 shallow compare：
  // 除 function, object, array 以外，都是 by value
  // 那上述三種，則是採 by reference, 你可以採 useMemo hook 的方式封裝你的 options boject
  // 或是直接往下取到 url 字串來做比對，如下
  useEffect(() => {
    if(options.url) {
      console.log('useFetch useEffect');
      fetch(options.url)
      .then((res) => res.json())
      .then((json) => {
        // 這裡為另外一個常見可能的錯誤
        options.onSuccess?.(json)
        setData(json)
      })
    }
  },[options.url])
  
  return { data };
}