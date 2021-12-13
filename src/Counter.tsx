/*/h3
import { useState } from 'react'
import {Player} from './classes/Player'


export const Counter = () => {
  const p = new Player();
  
  const [count, setCount] = useState(0)
  return (
    <div>
      <h3>Update the count and edit src/App.tsx, state is preserved  </h3>
      <button onClick={
        ()=>{setCount((c) => c + 1); 
}
	}> Count - {count} </button>
    </div>
  )
}
*/
import { useState } from 'react'
import {Player} from './classes/Player'


export const Counter = () => {
  const p = new Player();

  const [count, setCount] = useState(0)
  return (
    <div>
      <h3>Update the count and edit</h3>
      <button onClick={
		() => setCount((c) => c + 1)
	}>p</button>
    </div>
  )
}
