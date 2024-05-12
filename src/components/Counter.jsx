import React from 'react'
import { useDispatch } from 'react-redux'
import { increment,decrement,reset } from '../Redux/app.slice'


function Counter() {
    const dispatch=useDispatch()
  return (
    <div>
        <button onClick={()=>dispatch(increment(1))}>Inc</button>
        <button onClick={()=>dispatch(decrement(1))}>Dec</button>
        <button onClick={()=>dispatch(reset(0))}>Res</button>
    </div>
  )
}

export default Counter