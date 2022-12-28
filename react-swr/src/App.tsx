import { FC, Suspense, useState } from "react"
import PokemonList from "./components/PokemonList"

const App: FC = () => {
  return (
    <div className="container mx-auto px-4">
      <h1 className="text-3xl font-bold">
        SWR 範例
      </h1>
      <Suspense fallback={<div>loading...</div>}>
        <PokemonList/>
      </Suspense>
    </div>
  )
}

export default App
