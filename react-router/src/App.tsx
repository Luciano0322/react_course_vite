import { FC } from "react"
import { BrowserRouter, Link, Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Home from "./pages/Home"
import NotFonud from "./pages/NotFonud"
import Shirts from "./pages/Shirts"
import ShirtWid from "./pages/Shirts/ShirtWid"
import Shop from "./pages/Shop"

// BrowserRouter 就像 redux 的 provider 一樣，必須在最上層來處理
// Routes 裡面包的事處理所有路由導向的頁面
// Route 代表的是該路徑下需要渲染的 components


// 為了方便示範我先生成幾個頁面在 pages 的資料夾內
const App: FC = () => {

  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="shop" element={<Shop />} >
          <Route path="shirts">
            {/* nesting 的做法 */}
            <Route index element={<Shirts/>} />
            <Route path=":id" element={<ShirtWid/>} />
          </Route>
        </Route>
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<NotFonud />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
