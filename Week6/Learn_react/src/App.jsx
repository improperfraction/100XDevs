import React, { memo, useCallback, useEffect, useMemo, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import axios from 'axios';
import './App.css'
import { useRef } from 'react';

function App() {

  const [count, setCount]= useState(0);
  const prevcount= useRef();

  useEffect(()=>{
    prevcount.current=count
  })
  
  return(
    <>
    <h2> Current counter value: {count}</h2>
    <h3> Previous counter value:  {prevcount.current}</h3>
    <button onClick={()=>{
      setCount(count+1)
    }}>Increment</button>
    </>
  )
}



const Tag= memo(({clicked})=>
{
 
  return <div>
     {console.log("re-rendered")}
    <button onClick={clicked}>Click meee</button>
  </div>
});

function Todo({id})
{
  const [todos, setTodos]= useState({});
useEffect(()=>{  fetch(`https://sum-server.100xdevs.com/todo?id=${id}`)
  .then(async(res)=>{
    const json= await res.json()
    setTodos(json.todo);
  })}, [id])

  return <div>
     <p>{todos.title}</p> 
    <p>{todos.description}</p>
  </div>
}

export default App
