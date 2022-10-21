export const USER_L3_CHANGE = "USER_L3_CHANGE";
export const PWD_L3_CHANGE = "PWD_L3_CHANGE";
export enum Level3ActionTypes {
  USER_L3_CHANGE = 'USER_L3_CHANGE',
  PWD_L3_CHANGE = 'PWD_L3_CHANGE'
}

export interface Level3Action {
  type: Level3ActionTypes;
  payload: string
}

export interface Level3Form {
  user_lv3: string;
  pwd_lv3: string;
}

export const level3Default = {
  user_lv3: "",
  pwd_lv3: ""
}

// 這裡實務上都是會拆開來做管理，在引入要用的頁面邏輯
// action吃的是dispatch(e) 的 e, 所以 e 的資料型別很重要，每次打的東西要和你對應的 case 對上
// ex: 如果 case USER_L3_CHANGE 裡面沒有帶入 value 的值，那這邊就沒辦法寫入 || 修改共用的 state
const level3Reducer = (state: Level3Form, action: Level3Action) => {
  switch (action.type) {
    case Level3ActionTypes.USER_L3_CHANGE:
      return { ...state, user_lv3: action.payload }
    case Level3ActionTypes.PWD_L3_CHANGE:
      return { ...state, pwd_lv3: action.payload }
    default:
      return state;
  }
}

export default level3Reducer;