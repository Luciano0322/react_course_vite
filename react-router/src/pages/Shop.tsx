import { FC } from 'react'
import { Link, Outlet } from 'react-router-dom'

const Shop: FC = () => {
  return (
    <div>
      <h1>This is Shop Page</h1>
      <ul>
        <li>
          <Link to="shirts">shirts</Link>
        </li>
      </ul>
      {/* Outlet 可以對該路徑下需要切分段落的 component 做一個分流的整理 */}
      <Outlet/>
    </div>
  )
}

export default Shop
