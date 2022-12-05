import { FC } from 'react'
import { Link } from 'react-router-dom'

const Shirts: FC = () => {
  return (
    <div>
      <h1>shirts menu page</h1>
      <ul>
        <li>
          <Link to={`${1}`}>shirt 1</Link>
        </li>
        <li>
          <Link to={`${2}`}>shirt 2</Link>
        </li>
        <li>
          <Link to={`${3}`}>shirt 3</Link>
        </li>
      </ul>
    </div>
  )
}

export default Shirts
