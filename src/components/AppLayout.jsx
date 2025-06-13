import React from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'

function AppLayout() {
  return (
    <div className='pt-[60px]'>
        <Navbar/>
        <Outlet/>

    </div>
  )
}

export default AppLayout