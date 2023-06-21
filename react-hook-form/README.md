## 這篇的內容主要介紹常用表單工具React hook form  

### 簡單來說就是 react 版本的form validation  

***  

這邊介紹的[React hook form](https://react-hook-form.com/)，請大家有空的話一定要熟讀他的官方文件，這裡提供的作法會比較偏向基本實作面，如果要用到進階一點的功能，還情熟讀官方的作法。  

這裡簡單描述我的使用背景及為何我推薦新手一定要熟練這個工具好了，如果有follow我的Medium的朋友也會知道一點，這類的套件是屬架生在jsx生態圈的custom hook而已，所以無法套用到其他框架中使用，但是只要是在react生態圈當中的產品皆可以適用，例如：Nextjs, Remixjs, React-native..., 所以適用範圍相當廣大。  

我使用的版本橫跨v6 -> v7，但是這裡的教學主要還是以v7為主，然後我是比較建議使用Controller的方式來處理表單，這樣能過渡到react-native中使用，那一樣我會示範沒有controller的作法，這裡會用到react-router-dom來處理路由，不懂的朋友可以往react-router的資料夾查看如何應用，css的部分我預先安裝的是tailwindCss，一樣是很通用的工具。  
