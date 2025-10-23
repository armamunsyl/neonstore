import React from 'react'
import { NavLink } from 'react-router'
import aveterimg from '../assets/aveter.png'

const Navbar = () => {
    const links = <>
        <NavLink><li>Home</li></NavLink>
        <NavLink to={"/news"}><li>Esports News</li></NavLink>
    </>
    return (
        <div className="navbar bg-[#e0f2f5] md:max-w-11/12 mx-auto">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>

                <h4 className="text-[#0cc0df] text:sm md:text-xl">NeonBytes Store</h4>
         
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 gap-2">
                   {links}
                </ul>
            </div>
            <div className="navbar-end ">
                <NavLink to={"/myprofile"}><img className='w-10 mr-3' src={aveterimg} alt="" /></NavLink>
                
                
                <NavLink to={"/login"}><a className="btn bg-[#0cc0df] text-white py-4">Login</a></NavLink>
            </div>
        </div>
    )
}

export default Navbar