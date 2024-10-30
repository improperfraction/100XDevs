import { useState } from 'react'
import Carform from './components/Carform'
import Carlist from './components/Carlist'
import Carsearch from './components/Carsearch'
import Carvalues from './components/Carvalues'
import './App.css'




function App() {

  return (
    <div className=''>
      <Carform></Carform>
      <Carsearch></Carsearch>
      <Carlist></Carlist>
      <Carvalues></Carvalues>
    </div>
  )
}

export default App
