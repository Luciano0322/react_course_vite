import { FC, useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'

const members: string[] = [
  'John',
  'Bill',
  'Jack',
  'Abby',
  'Cindy',
];

// 這裡簡單介紹一下一般常會看到的搜尋功能，就是在url後面接著參數的做法
// 通常作為索資用，那簡單示範一下搜尋功能的做法，但實際使用上來說會串接api
const Contact: FC = () => {
  const [picked, setPicked] = useState<string[]>(members)
  const [formParams, setFormParams] = useSearchParams({
    q: '',
  });

  const q = formParams.get("q")

  useEffect(() => {
    if(q) {
      // 如果是用來串接api的話就要在這裡置換以下的code, 並將你的 q 帶入做為參數
      const adjMembers = members.filter((e) => e.includes(q))
      setPicked(adjMembers)
    }
    return () => setPicked(members)
  }, [q])

  return (
    <div>
      <h1>Contact Page</h1>
      <form action="">
        <fieldset>
          <legend>choice a member</legend>
          <input 
            type="text" 
            value={q || ""}  
            onChange={(e) => setFormParams({ q: e.target.value})}
          />
          {picked.map((e) => (
            <p key={e}>{e}</p>
          ))}
        </fieldset>
      </form>
    </div>
  )
}

export default Contact
