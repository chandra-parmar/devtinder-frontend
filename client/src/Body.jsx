import React from 'react'
import Navbar from './components/Navbar'

const Body = () => {
  return (
    <div>
        <Navbar></Navbar>
        <Outlet></Outlet>
    </div>
  )
}

export default Body
