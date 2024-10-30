import { useState, lazy, Suspense } from 'react'

import './App.css'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import Home from './Components/Home';
const Signup = lazy(() => import('./pages/Signup'));
const Signin = lazy(() => import('./pages/Signin'));
const Dboard = lazy(() => import('./pages/Dashboard'));
const SendMoney = lazy(() => import('./pages/SendMoney'));


function App() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path='/signup' element={<Suspense fallback={<Loading/>}><Signup/></Suspense>}></Route>
                <Route path='/signin' element={<Suspense fallback={<Loading/>}><Signin /></Suspense>}></Route>
                <Route path='/dashboard' element={<Suspense fallback={<Loading/>}><Dboard /></Suspense>}></Route>
                <Route path='/sendmoney' element={<Suspense fallback={<Loading/>}><SendMoney /></Suspense>}></Route>
               {/* <Route path='/' element={<Suspense fallback={<Loading/>}><Home /></Suspense>}></Route> */}
               <Route path='/' element={<Home></Home>}></Route>
            </Routes>
        </BrowserRouter>

    )
}

function Loading() {
    return (
        <div className='w-screen h-screen flex justify-center items-center	'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
            </svg>
        </div>
    )
}

export default App
