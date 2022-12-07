import React from 'react'
import { useRoutes } from 'react-router-dom'
import Layout from './components/Layout'
import About from './pages/About'
import Contact from './pages/Contact'
import Home from './pages/Home'
import Pants from './pages/Pants'
import PantWid from './pages/Pants/PantWid'
import Shirts from './pages/Shirts'
import ShirtWid from './pages/Shirts/ShirtWid'
import Shop from './pages/Shop'

// 這就是比較推薦的做法，將所有的routes拆出來做統一的管理
// 包含了每一層的從屬關係，都可以透過下列的表很清處的看到
// 這裡我們可以嘗試使用react-router-dom 的 <Outlet>，來處理我們常駐在畫面的navbar
// 我這裡將這些東西拆出來用Layout的component去做封裝，類似像mantine的app shell在處理
const routes = [
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About />},
      { 
        path: "shop", 
        element: <Shop />,
        children: [
          { 
            path: "shirts", 
            element: <Shirts/>,
          },
          {
            path: "shirts/:id",
            element: <ShirtWid/>,
          },
          {
            path: "pants",
            element: <Pants />,
          },
          {
            path: "pants/:id",
            element: <PantWid />,
          },
        ]
      },
      {
        path: "contact",
        element: <Contact />,
      }
    ]
  },
]

const RouteConf = () => {
  const routeConfig = useRoutes(routes)
  return routeConfig
}

export default RouteConf
