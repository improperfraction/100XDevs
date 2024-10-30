import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0);

  

  return (
    <>
    <div className='top'>
      <div className='red'> Tailwind css </div>
      <div className='grey'> Tailwind css </div>
      <div className='blue'> Tailwind css </div>
    </div>
     <div className='grid grid-cols-12'>
     <div className='bg-red-600 col-span-5'> Tailwind css </div>
     <div className='bg-yellow-500 col-span-4'> Tailwind css </div>
     <div className='bg-blue-600 col-span-3'> Tailwind css </div>
   </div>
   <h2>Responsiveness</h2>
   <div className='grid grid-cols-1 md:grid-cols-3'>
     <div className='bg-red-600 '> Tailwind css </div>
     <div className='bg-yellow-500 '> Tailwind css </div>
     <div className='bg-blue-600 '> Tailwind css </div>
   </div>
   <br></br>
   <button className="bg-blue-500 hover:bg-blue-800 text-white font-bold m-2 py-2 px-4 rounded">
  Hover Me
</button>

<div class="grid grid-rows-3 grid-cols-3 gap-10">
  <div class="row-span-1 col-span-1 bg-red-700 text-white text-center inline-block align-middle">Item 1</div>
  <div class="row-span-3 col-span-1 bg-yellow-700 text-white text-center inline-block align-middle">Item 2</div>
  <div class="row-span-2 col-span-1 bg-blue-700 text-white text-center inline-block align-middle">Item 3</div>
</div>

<div className='bg-red-600 sm:bg-yellow-600 md:bg-blue-600 lg:bg-green-600'>Responsiveness</div>

   </>
  )
}

export default App

