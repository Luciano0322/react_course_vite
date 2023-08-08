import { FC } from 'react'
import { Link } from 'react-router-dom'

const Navbar:FC = () => {
  return (
    <div className="flex items-center justify-between m-4">
      <ul className="flex items-center justify-around list-none flex-grow">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/register">register 用法</Link>
        </li>
      </ul>
    </div>
  )
}

export default Navbar
