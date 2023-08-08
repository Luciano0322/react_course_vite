import { FC } from 'react'
import DefaultPart from '../components/DefaultPart'

const Home:FC = () => {
  return (
    <div className="container mx-auto">
      <h1 className="bold text-blue-500 text-lg">表單驗證工具</h1>
      <p>這裡提供一點官網的基本範例，以最基本的概念來處理input</p>
      <p>可以參考我的code 會更容易理解一些</p>
      <DefaultPart/>
    </div>
  )
}

export default Home
