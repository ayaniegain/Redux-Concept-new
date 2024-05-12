import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchTodos } from '../Redux/product.slice';


function MyData() {
  const dispath=useDispatch()
    let data=useSelector((state)=>state.count.value)
    let productdata=useSelector((state)=>state)

    console.log(productdata);
  return (
    <>
    <div>counter is {data}</div>

    <button onClick={()=>dispath(fetchTodos)} >show data</button>
    </>
  )
}

export default MyData