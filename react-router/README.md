## 這篇的內容主要介紹如何在React專案中設定路由

### react-router-dom (v6) . 

react-router-dom 是一個處理 React 專案路由設定的常用工具，已經存在了很長的時間了，通常遇到的專案中有90%都是使用此套件，算是一個非常熱門好用的工具，那麼我們就一步一步來介紹如何使用吧！

1. 首先我們先從官網教學中安裝該套件
```
npm i react-router-dom
or
yarn add react-router-dom
```

2. 安裝完成後我們先整理一下資料夾將用不到的 file 先整理一下，然後進入到 App.tsx 裡面引入 BrowserRouter 將整個 app 的 dom 包住。

3. Routes 是所有 Route 的集合，如果要調整路由的部分就要用這個方式調整。