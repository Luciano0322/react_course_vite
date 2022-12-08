import { FC } from 'react'
import { useParams } from 'react-router-dom'

// 可以透過useParams 的 hook 來拿到產品的 id
// 這裡的id是對應你url定義的pathname
// 假設你是定義成 /:shirtId 那你就要改用 shirtId 來取值
const ShirtWid: FC = () => {
  const { id } = useParams();
  return (
    <div>
      <h1>shirt {id}</h1>
    </div>
  )
}

export default ShirtWid
