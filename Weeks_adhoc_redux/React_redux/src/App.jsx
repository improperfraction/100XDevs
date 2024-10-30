import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './components/Counter'
import RCounter from './components/Red_counter'
import SimpleCounter from './components/Simple'
import ReduxCounter from './components/ReduxCounter'


function App() {

  return (
    <>
    {/* <Provider store={store}> 
     <Cakes></Cakes>
     </Provider> */}
     {/* <Counter></Counter> */}
     {/* <RCounter></RCounter> */}
     <ReduxCounter></ReduxCounter>
     {/* <SimpleCounter></SimpleCounter> */}
   </>
  )
}

export default App
