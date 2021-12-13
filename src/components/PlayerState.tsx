import {useState} from 'react' 
import {Player} from '../classes/Player'

export const PlayerState = (Player)=>{
//state only
  let atk =Player.atk;
 // id =Player.id;
  return(
   <div>
     <button onClick={()=>{alert(atk)}}>clic this to get atk of playa</button>
   </div>
  )

}
