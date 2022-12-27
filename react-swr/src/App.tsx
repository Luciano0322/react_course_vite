import { FC } from "react"
import useSWR from "swr"

const fetcher = (url: string) => fetch(url).then(r => r.json())

const App: FC = () => {
  const { data: pokes, error } = useSWR(`https://pokeapi.co/api/v2/pokemon`, fetcher)
  return (
    <div className="container mx-auto px-4">
      <h1 className="text-3xl font-bold">
        SWR 範例
      </h1>
      {pokes && <div>{JSON.stringify(pokes)}</div>}
      {/* {pokes?.results?.map((poke) => (
        <p key={poke.name}>{poke.name}</p>
      ))} */}
    </div>
  )
}

export default App
