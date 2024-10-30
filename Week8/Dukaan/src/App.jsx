import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import RevenueCard from './components/Revenuecd'
import PayoutCard from './components/Payoutcd'
import AppBar from './components/Appbar'
import SideBar from './components/SideBar'
import Tscn from './components/TscnTable'
import Details from './components/Details'

function App() {

  return (
    <div> 
      <SideBar></SideBar>
      <AppBar></AppBar>
    <div className='grid grid-cols-3 gap-5 ml-56 px-5 mt-5 '>
    <PayoutCard pendingAmount={"2,313.00"} orderCount={23} PayoutTime={"Today, 04:00 PM"}></PayoutCard>
    <RevenueCard title={"Amount Pending"} pendingAmount={"92,312.20"} orderCount={13}></RevenueCard>
    <RevenueCard title={"Amount Processed"} pendingAmount={"23,92,312.19"} ></RevenueCard>
    </div>
    <Details pocount={22} rfcount={6}></Details>

    <Tscn></Tscn>
    </div>
    )

}

export default App
