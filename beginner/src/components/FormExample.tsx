import { ChangeEvent, FC, useReducer, useState } from 'react'
import level3Reducer, { Level3ActionTypes, level3Default, PWD_L3_CHANGE, USER_L3_CHANGE } from '../reducers/level3Reducer'

const FormExample: FC = () => {
  // 我們來總結以上學到 hook 實際演練表單綁定的狀況吧
  // 在此之前首先要了解 html input 的綁定機制
  // 一般來說有兩種，受控(controlled) / 非受控(uncontrolled)
  // 那這裡主要示範一般實務上應用最為廣泛的 controlled
  // 上面的觀念我這裡就不再細講，有興趣深入理解的話可以 google 以上關鍵字
  // 下面我使用一般初學的做法
  // level 1
  const [username, setUsername] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const lv1UsernameChange = (evt: ChangeEvent<HTMLInputElement>) => {
    setUsername(evt.target.value)
  }
  const lv1PasswordChange = (evt: ChangeEvent<HTMLInputElement>) => {
    setPassword(evt.target.value)
  }

  // level 2
  // 將上述的欄位整合成一個 state 減少過度浪費暫存空間
  const [level2, setLevel2] = useState({
    lv2user: '',
    lv2pwd: ''
  })
  // 這樣處理起來也可以簡化 change function 成一個共用 function
  const level2Change = (e: ChangeEvent<HTMLInputElement>) => setLevel2({...level2, [e.target.name]: e.target.value })

  // level 3
  // 這裡要來介紹另外一個 React 的 hook function: useReducer,
  // 這個 hook 主要也是借鏡 redux 的 data flux 改進出來的 hook function
  // 在 2017 年的 React conf, 由 redux 的共同創辦人 Dan Abramov 現場演示如何使用這些 hook function
  // 其主要概念就是用來簡化每個 component 會產生許多各自的 state, 如此往復發展必然會成為一個很大的整理問題
  // 那接著解釋他怎麼運作的吧！

  // 首先你會看到與 useState 想同的陣列結構，不同的地方是帶入的參數，以 useState 來說你只能帶入一個 default value
  // 那麼在 useReducer 裡面你可以帶入兩個參數，第一個是 callback function, 第二個才是 default value
  // 此外，第一個 callback 則為所有的 state change function 的集合
  // 在實際運作上，會透過陣列內的 dispatch 驅動你的 callback 內的 action 參數結構，並按照你帶入的值運行你的 state change case

  const [level3, dispatch] = useReducer(
    // (state: {user_lv3: string; pwd_lv3: string}, action: {type: string, payload: string}) => {
    //   switch (action.type) {
    //     case 'USER_L3_CHANGE':
    //       return { ...state, user_lv3: action.payload }
    //     case 'PWD_L3_CHANGE':
    //       return { ...state, pwd_lv3: action.payload }
    //     default:
    //       return state;
    //   }
    // }, 
    // 這裡我拆分出去了，也是比較 standard 的做法
    level3Reducer,
    // {
    //   user_lv3: "",
    //   pwd_lv3: "",
    // }
    // 一樣我也拆分出去了
    level3Default
  )

  const levelSend = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('level1', {username, password}); //level1
    console.log('level2', level2) // level2
    console.log(level3) // level3
  }

  return (
    <>
      <div>
        <p>step 3: 表單應用的範例（登入系統）</p>
      </div>
      <form onSubmit={levelSend}>
        <fieldset>
          <legend>Level 1</legend>
          <div>
            <label htmlFor="username">username</label>
            <input 
              id="username"
              name="username" 
              value={username}
              onChange={lv1UsernameChange}
            />
          </div>
          <div>
            <label htmlFor="password">password</label>
            <input 
              id="password"
              name="password"
              type="password"
              value={password}
              onChange={lv1PasswordChange}
            />
          </div>
        </fieldset>
        <fieldset>
          <legend>Level 2</legend>
          <div>
            <label htmlFor="lv2user">username</label>
            <input 
              id="lv2user"
              name="lv2user" 
              value={level2.lv2user}
              onChange={level2Change}
            />
          </div>
          <div>
            <label htmlFor="lv2pwd">password</label>
            <input 
              id="lv2pwd"
              name="lv2pwd"
              type="password"
              value={level2.lv2pwd}
              onChange={level2Change}
            />
          </div>
        </fieldset>
        <fieldset>
          <legend>Level 3</legend>
          <div>
            <label htmlFor="user_lv3">username</label>
            <input 
              id="user_lv3"
              name="user_lv3" 
              value={level3.user_lv3}
              onChange={(e: ChangeEvent<HTMLInputElement>) => dispatch({type: Level3ActionTypes.USER_L3_CHANGE, payload: e.target.value})}
            />
          </div>
          <div>
            <label htmlFor="pwd_lv3">password</label>
            <input 
              id="pwd_lv3"
              name="pwd_lv3"
              type="password"
              value={level3.pwd_lv3}
              onChange={(e: ChangeEvent<HTMLInputElement>) => dispatch({type: Level3ActionTypes.PWD_L3_CHANGE, payload: e.target.value})}
            />
          </div>
        </fieldset>
        <button
          type='submit'
        >
          送出
        </button>
      </form>
    </>
  )
}

export default FormExample
