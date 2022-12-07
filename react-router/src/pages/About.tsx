import { FC } from 'react'
import { useNavigate } from 'react-router-dom'

// 這裡簡單介紹一下常用的hook，useNavigate有點結合了js location與history的功能
// 所以不一定是只能用Link的方式做連結，也可以透過button的onClick function來做
const About: FC = () => {
  const navigate = useNavigate()
  // 參數的話可以帶入數字或是url字串，如果是url字串的話要注意路徑覆蓋的問題
  // 如果不從'/'開始的話就會接續現在的路徑下加字串
  // 如果帶入值為數字的話，可以實現v5的useHistory的效果
  // 另外重點講一下第二個參數東西，
  // replace的意思是可以刪除掉該步驟的意思，就是當你移動到該路徑，
  // 接著按下返回，就不會回到此步驟，在用於特定表單時很好用(登入, 註冊...)
  return (
    <div>
      <h1>About page</h1>
      <button onClick={() => navigate(-1)}>back</button>
      <button onClick={() => navigate("/contact")}>go to contact</button>
      <button onClick={() => navigate("/shop", { replace: true})}>go to sop & delete record</button>
    </div>
  )
}

export default About
