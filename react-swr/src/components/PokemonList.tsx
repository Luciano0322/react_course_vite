import { FC, useState } from "react"
import useSWR from "swr"

interface Pokes {
  name: string;
  url: string;
}
interface PokesRes {
  count: number;
  next: string | null;
  previous: string | null;
  results: Pokes[];
}

const fetcher = (url: string) => fetch(url).then(r => r.json())

const PokemonList: FC = () => {
  const [pokesUrl, setPokesUrl] = useState<string>(`https://pokeapi.co/api/v2/pokemon`)
  const { data: pokes, error } = useSWR<PokesRes>(pokesUrl, fetcher)
  return (
    <div>
      {pokes && (
        <>
          <button 
            className="px-2 py-1 mx-2 border rounded-lg hover:bg-blue-200 active:bg-blue-300 disabled:bg-gray-100"
            onClick={() => {
              if(pokes.previous) {
                setPokesUrl(pokes.previous)
              }
            }} 
            disabled={pokes.previous === null}
          >
            prev
          </button>
          <button 
            className="px-2 py-1 mx-2 border rounded-lg hover:bg-blue-200 active:bg-blue-300 disabled:bg-gray-100"
            onClick={() => {
              if(pokes.next) {
                setPokesUrl(pokes.next)
              }
            }} 
            disabled={pokes.next === null}
          >
            next
          </button>
        </>
      )}
      {pokes?.results?.map((poke) => (
        <p key={poke.name}>{poke.name}</p>
      ))}
    </div>
  )
}

export default PokemonList
