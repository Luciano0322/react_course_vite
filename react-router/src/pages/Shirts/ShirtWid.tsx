import { FC } from 'react'
import { useParams } from 'react-router-dom'

// 可以透過useParams 的 hook 來拿到產品的 id
const ShirtWid: FC = () => {
  const { id } = useParams();
  return (
    <div>
      <h1>shirt {id}</h1>
    </div>
  )
}

export default ShirtWid
