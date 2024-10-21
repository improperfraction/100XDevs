import { lazy, Suspense, useState } from 'react'
const Counter= lazy( ()=> import('./components/Count'));
const Props= lazy(()=> import( './components/Props'));
const Memo= lazy(()=> import( './components/Memo'));
const Memoize= lazy(()=> import( './components/Memoize'));
const Ref= lazy(()=> import( './components/Ref'));
const Drill= lazy(()=> import('./components/Drill'));
const Context= lazy(()=> import('./components/Context'));
const REcoil= lazy(()=> import('./components/Recoil'));


import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom'
import Recoil from './components/Recoil';


function App() {
  return (
    <>
      <BrowserRouter>
      <Bar></Bar>
        <Routes>
          <Route path='/counter' element={<Suspense fallback={"Loading..."}><Counter /></Suspense>}></Route>
          <Route path='/props' element={<Suspense fallback={"Loading..."}><Props /></Suspense>}></Route>
          <Route path='/memo' element={<Suspense fallback={"Loading..."}><Memo /></Suspense>}></Route>
          <Route path='/memoize' element={<Suspense fallback={"Loading..."}><Memoize /></Suspense>}></Route>
          <Route path='/ref' element={<Suspense fallback={"Loading..."}><Ref /></Suspense>}></Route>
          <Route path='/drill' element={<Suspense fallback={"Loading..."}><Drill/></Suspense>}></Route>
          <Route path='/context' element={<Suspense fallback={"Loading..."}><Context/></Suspense>}></Route>
          <Route path='/recoil' element={<Suspense fallback={"Loading..."}><Recoil/></Suspense>}></Route>


        </Routes>
      </BrowserRouter>

    </>
  )
}

function Bar()
{
  const navigate = useNavigate()

  return(
    <div>
        <button onClick={() => {
          navigate('/counter');
        }}>counter</button>
        <button onClick={() => {
          navigate('/memo');
        }}>Memo</button>
        <button onClick={() => {
          navigate('/props');
        }}>props</button>
        <button onClick={() => {
          navigate('/memoize');
        }}>memoize</button>
        <button onClick={() => {
          navigate('/ref');
        }}>ref</button>
         <button onClick={() => {
          navigate('/drill');
        }}>Drill</button>
         <button onClick={() => {
          navigate('/context');
        }}>Context</button>
         <button onClick={() => {
          navigate('/recoil');
        }}>Recoil</button>
      </div>
  )
}

export default App
