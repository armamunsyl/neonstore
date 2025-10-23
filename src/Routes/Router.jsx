import { createBrowserRouter } from "react-router"
import App from "../App";
import Layout from "../Layout/Layout";
import Navbar from "../Component/Navbar";
import { Children, Component } from "react";
import Home from "../Component/Home";

const router = createBrowserRouter([
        {
            path: "/",
            Component: Layout,
            children: [
                {
                    index:true,
                    Component: Home,
                }
            ]

        
        },
        {
            path: "/auth",
            element: <h2>auth</h2>
        },

    ]);

export default router;