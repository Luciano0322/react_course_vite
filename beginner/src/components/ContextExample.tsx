import { FC, useContext, useState } from 'react'
import UserContext, { UserState } from '../store';

// 這裡解釋一下資料傳遞的部分，通常 components 之間要傳遞資料，必須透過 props
// 的方式傳遞，那麼就會有一種情況，當有一份資料需要傳遞到子層的子層使用時，
// 作為中間層的元件就必須當接線生的角色，即便那份資料它根本不需要也必須接應 props 並往下傳
// 數量不多還好，但如果層數一多就會很困擾。
// 在早期還沒有 hook function 的時候，要打破這樣的規則就必須使用 redux 的套件，
// 關於 Redux 的部分各位可以參考我 it 邦鐵人賽的文章 link: https://ithelp.ithome.com.tw/users/20129020/ironman/5360
// 但在 hook function 出現之後，藉著 context & useContext hook 就可以很輕鬆的去做到直接傳遞的事情

// const initialState = {
//   first: "Luciano", 
//   last: "Lee"
// };

// type UserState = typeof initialState;

// 首先要先 create 一個 context 來提供子層的 component 使用。 
// const UserContext = createContext<typeof initialState>(initialState);
// 上面的部分我先拆到 store.ts 裏面再引入回來

const PrintName: FC = () => {
  // 這裡是子層，可以看到透過 useContext 拿到本來應該由 props 傳遞的資料。
  const user = useContext<UserState>(UserContext);
  return (
    <div>
      <div>First: {user.first}</div>
      <div>Last: {user.last}</div>
    </div>
  );
}

const ContextExample: FC = () => {
  const [user, setUser] = useState<UserState>({
    first: "Rock",
    last: "Johnson"
  })
  // 下面引用剛才 createContext 的 context 
  // 然後記得要如下面的形式 .Provider 並且給予 value
  // value 的格式為 createContext 的 initialState
  return (
    <UserContext.Provider 
      value={user}
    >
      <h4>step 5: Context Provider & useContext 範例</h4>
      <PrintName/>
      <button
        onClick={() => setUser({
          first: "John",
          last: "Cena",
        })}
      >
        change context
      </button>
    </UserContext.Provider>
  )
}

export default ContextExample
