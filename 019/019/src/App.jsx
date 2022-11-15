import { useState } from 'react'


function App() {

  const [number,setNumber]=useState(0);

  function handleClick(action,value){
    switch(action){
      case "+":
        return setNumber(number+value)
      case "-":
        return setNumber(number-value)
      case "reset":
        return setNumber(0)
    }
  }
  return(
    <div>
    <h1>{number}</h1>
    <button onClick={()=>handleClick('+',1)}>+</button>
    <button onClick={()=>handleClick('-',1)}>-</button>
    <button onClick={()=>handleClick('reset')}>reset</button>
    <button onClick={()=>handleClick('+',10)}>+10</button>
    <button onClick={()=>handleClick('-',10)}>-10</button>
  </div>
  )
  


}

export default App
