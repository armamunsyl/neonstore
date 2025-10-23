import React from 'react'
import Navbar from '../Component/Navbar'
import { Outlet } from 'react-router'
import Footer from '../Component/Footer'

const Layout = () => {
  return (
    <div className='max-w-11/12 mx-auto'>
        <Navbar> </Navbar>
        <Outlet></Outlet>
        <Footer></Footer>
    </div>
  )
}

export default Layout