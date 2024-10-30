import {BrowserRouter, Routes, Route, useNavigate, Link} from 'react-router-dom'
import './App.css'
import { useState } from 'react'
import { Contextcount } from './Context';
import { useContext } from 'react';
import { memo } from 'react';


function App() {
const [count, setCount]= useState(0);
  return (
  <>
  <Contextcount.Provider value={{count, setCount}}>
   <Count ></Count>
  </Contextcount.Provider>
  </>  
  )
}

const Count= memo(()=>{
{
  console.log("Count re-rendered")
  return <div>
    <h3>Counter</h3>
    <CountRenderer ></CountRenderer>  
    <Button ></Button>
  </div>
}})

function CountRenderer()
{
  const {count}= useContext(Contextcount);
  return <div>
    {count}
  </div>
}

function Button()
{
 const {count, setCount}= useContext(Contextcount);

  return <div>
    <button onClick={()=>{
      setCount(count+1)
    }}>Increament</button>
     <button onClick={()=>{
      setCount(count-1)
    }}>Decreament</button>
  </div>
}


export default App
