
import { useState } from 'react'
import {Player} from './classes/Player'


export const NewComp = () => {
  const p = new Player();

  const [count, setCount] = useState(0)
  return (
    <div>
      <h3> this is comp2</h3>
      <button onClick={() => setCount((c) => c + 1)}>
      </button>
    </div>
  )
}
