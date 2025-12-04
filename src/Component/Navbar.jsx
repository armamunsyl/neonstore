import React, { useContext } from "react";
import { NavLink } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";
import aveterimg from "../assets/aveter.png";
import { div, h1 } from "framer-motion/client";

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);

    const links = (
        <>
            <NavLink
                to="/"
                className={({ isActive }) =>
                    isActive
                        ? "text-[#0cc0df] font-semibold border-b-2 border-[#0cc0df] pb-1"
                        : "text-gray-700 hover:text-[#0cc0df] transition"
                }
            >
                <li>Home</li>
            </NavLink>
            <NavLink
                to="all-games"
                className={({ isActive }) =>
                    isActive
                        ? "text-[#0cc0df] font-semibold border-b-2 border-[#0cc0df] pb-1"
                        : "text-gray-700 hover:text-[#0cc0df] transition"
                }
            >
                <li>All Games</li>
            </NavLink>
            <NavLink
                to="play-games"
                className={({ isActive }) =>
                    isActive
                        ? "text-[#0cc0df] font-semibold border-b-2 border-[#0cc0df] pb-1"
                        : "text-gray-700 hover:text-[#0cc0df] transition"
                }
            >
                <li>Play Games</li>
            </NavLink>


            <NavLink
                to="/news"
                className={({ isActive }) =>
                    isActive
                        ? "text-[#0cc0df] font-semibold border-b-2 border-[#0cc0df] pb-1"
                        : "text-gray-700 hover:text-[#0cc0df] transition"
                }
            >
                <li>Esports News</li>
            </NavLink>
        </>
    );

    const handleLogout = () => {
        logOut();
    };

    return (
        <div className="navbar bg-[#e0f2f5] md:max-w-11/12 mx-auto">
            <div className="navbar-start">
                <div className="dropdown">
                    <div
                        tabIndex={0}
                        role="button"
                        className="btn btn-ghost lg:hidden"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16"
                            />
                        </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
                    >
                        {links}
                    </ul>
                </div>

                <h4 className="text-[#0cc0df] text-sm md:text-xl">
                    NeonBytes Store
                </h4>
            </div>

            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 gap-4">{links}</ul>
            </div>

            <div className="navbar-end">
                {user ? (
                    <>
                        <NavLink to="/myprofile">
                            <img
                                className="w-10 h-10 rounded-full mr-3 border-2 border-[#0cc0df] object-cover"
                                src={user.photoURL || aveterimg}
                                alt="User"
                            />
                        </NavLink>
                        <NavLink to={"/"}>
                            <button
                                onClick={handleLogout}
                                className="btn bg-[#0cc0df] text-white"
                            >
                                Logout
                            </button>
                        </NavLink>
                    </>
                ) : (
                    <>
                        <NavLink to="/register">
                            <div className="btn bg-[#0cc0df] text-white py-4">Register</div>
                        </NavLink>
                        <NavLink to="/login">
                            <div className="btn bg-[#0cc0df] text-white py-4">Login</div>
                        </NavLink>
                    </>


                )}
            </div>

        </div>
    );
};

export default Navbar;
