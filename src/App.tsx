import { Counter } from './Counter'
import {Player} from './classes/Player'
import {NewComp} from './comp2'
import {Comp3} from './components/comp2'
import {PlayerState} from './components/PlayerState'

export const App = () => {
  
  return (
    <>
      <h1>React TS webpack bable</h1>
      <PlayerState />
      <Comp3/>
      <NewComp />
      <Counter />
      
      
    </>
  )
}

//console.log(Player);
