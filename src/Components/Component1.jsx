import React, { useContext, useState } from 'react'
import { MyContext, MyContextProvider } from '../Context/VariableContext'
const Component1 = () => {
const {name , updateName} = useContext(MyContext)
const [nam1, setnam1] = useState()
  return (
    <>
<h1>{name}</h1>
<input  onChange={(e)=>{
setnam1(e.target.value)
}}    type="text"  placeholder='Write Your Name Here....' />
 <button onClick={(e)=>{
updateName(nam1)
}} >Submit</button>


    </>
  )
}

export default Component1