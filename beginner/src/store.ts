import { createContext } from "react";

// 這裡提供一種 Typescript 的寫法，不一定都要用 interface
// 也可以採以下方式，直接針對該資料製作相對應的 type
const initialState = {
  first: "Luciano", 
  last: "Lee"
};

export type UserState = typeof initialState;

const context = createContext<typeof initialState>(initialState);

export default context;