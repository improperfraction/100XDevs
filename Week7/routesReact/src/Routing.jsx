import {BrowserRouter, Routes, Route, useNavigate, Link} from 'react-router-dom'
import './App.css'
import { Suspense, lazy } from 'react'
const Home= lazy(()=>import('./pages/Home'))
const Dashboard= lazy(()=>import('./pages/Dashboard'))

function App() {

  return (
  <>
    <BrowserRouter>
    <Bar></Bar>
      <Routes>
        <Route path='/home' element={<Suspense fallback={"Loading..."}><Home></Home></Suspense>}></Route>
        <Route path='/dashboard' element={<Suspense fallback={"Loading..."}><Dashboard></Dashboard></Suspense>}></Route>
      </Routes>
    </BrowserRouter>  
  </>  
  )
}

function Bar()
{
  const navigate = useNavigate()

  return <div>
    <button onClick={()=>{
        navigate('/home')
    }}>Home</button>
    <button onClick={()=>{
        navigate('/dashboard')
    }}>Dashboard</button>
</div>
}

export default App
