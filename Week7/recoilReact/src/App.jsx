
import './App.css'
import { useState } from 'react'
import { useContext } from 'react';
import { memo } from 'react';
import { RecoilRoot, selector, useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import  {countAtom, evenSelector } from './store/Count';
import { useMemo } from 'react';


function App() {
  return (
  <>
  <RecoilRoot>
   <Count ></Count>
  </RecoilRoot>
  </>  
  )
}

function Count()
{
  console.log("Count re-rendered")
  return <div>
    <h3>Counter</h3>
    <CountRenderer ></CountRenderer>  
    <Button ></Button>
    <Even></Even>

  </div>
}

function CountRenderer()
{
  const count= useRecoilValue(countAtom);
  return <div>
    {count}
  </div>
}

function Button()
{
const setCount= useSetRecoilState(countAtom)
console.log("buttons rendered")
  return <div>
    <button onClick={()=>{
      setCount(count=>count+1)
    }}>Increament</button>
     <button onClick={()=>{
      setCount(count=>count-1)
    }}>Decreament</button>
  </div>
}
function Even()
{
  //const count= useRecoilValue(countAtom);
  // if(count%2==0){
  // return <div>
  //   It is even
  // </div>
  // }
const isitEven= useRecoilValue(evenSelector);
  // const isitEven= useMemo(()=>{
  //   return count%2==0;
  // }, [count])

  return <div>
    { isitEven ? "It is Even" : null}
  </div>
}


export default App
