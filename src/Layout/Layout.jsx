import React from 'react'
import Navbar from '../Component/Navbar'
import { Outlet } from 'react-router'
import Footer from '../Component/Footer'
import { ToastContainer } from "react-toastify";

const Layout = () => {
  return (
    <div className=''>
        <Navbar> </Navbar>
        <Outlet></Outlet>
        <Footer></Footer>
        <ToastContainer position="top-center" />
    </div>
  )
}

export default Layout