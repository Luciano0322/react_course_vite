import React, { FC } from 'react'
import { Link } from 'react-router-dom'

const Pants: FC = () => {
  return (
    <div>
      <h1>This is Pants menu</h1>
      <ul>
        <li>
          <Link to={`${1}`}>pant 1</Link>
        </li>
        <li>
          <Link to={`${2}`}>pant 2</Link>
        </li>
        <li>
          <Link to={`${3}`}>pant 3</Link>
        </li>
      </ul>
    </div>
  )
}

export default Pants
