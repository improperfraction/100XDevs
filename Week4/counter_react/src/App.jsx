import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
//setting state for counter, here incount is state which initialized
//with value 0 using useState hook
//setIncount function is used to increase the Incount
 const [incount, setIncount]= useState(0);
 const [decount, setDecount]= useState(0);

 //function to increase incount usimg setIncount
 function increment()
 {
    setIncount(incount+1);
 }

  //function to decrease decount usimg setDecount
 function decrement()
 {
  setDecount(decount-1);
 }
  return (
    <div>
     {/* created button which calls respective methods to increase and decrease 
     the count */}
      <button onClick={increment}>Counter incremented to {incount}</button>
      <button onClick={decrement}>Counter decremented to {decount}</button>

    </div>
  )
}
  

export default App
