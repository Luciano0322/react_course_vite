# React 新手教學
## 基礎管念  
我有盡量按照順序去打 git 節點，基本上按照畫面順序一步一步往下進行應該是沒問題  
大家可以依照畫面上的順序進行學習  
這個 project 的教學內容為基本 React 所有的 hook function 的應用
也有一些基本的 component 拆分與資料傳遞

### 基礎 hook  
1. 透過簡單的 counter 帶大家理解 useState 的處理方式。
2. 透過計時器與 api 串接功能帶大家理解 useEffect 的運作原理。
3. 透過登入系統表單讓大家理解 React state management 的 hook function --useReducer
4. 透過比較原本基礎的 input 綁定 useState 與 input 綁定 useRef 的差異，讓大家理解 useRef hook 的優點及使用方式。
5. 透過簡單的資料傳遞做出子層結構，讓大家理解是如何透過 useContext hook, 拿到原本應由 props 層層傳遞下來的資料的。
6. 透過強制更改 input value 來解釋 useEffect 與 useLayoutEffect 的差異。  
7. 透過子母層按鈕的層套關係解釋 ForwardRef & useImperativeHandle 的使用情境。
***  
### 進階 hook  
這邊的 hook 會比較偏向效能優化的 hook 比較進階一點，但也算是常見使用。  
8. React.memo 的運作原理與 useMemo 的使用狀況，理解如何降低重複渲染相同資料的情況。  
9. useCallback 的運作原理與實際操作。  

### 總結  
以上為基本 React 本身所提供的方法，其他比如路徑管理啊，api 整理工具等等的，都有相應的套件可以支援。  
當然也可以純手工 DIY, 那後續會介紹 web 最常用到的 React router dom。
