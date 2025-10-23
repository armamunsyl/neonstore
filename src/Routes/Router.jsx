import { createBrowserRouter } from "react-router"
import App from "../App";
import Layout from "../Layout/Layout";
import Navbar from "../Component/Navbar";
import { Children, Component } from "react";
import Home from "../Component/Home";
import Login from "../Component/Login";
import Register from "../Component/Register";

const router = createBrowserRouter([
    {
        path: "/",
        Component: Layout,
        children: [
            {
                index: true,
                Component: Home,
            },
            {
                path: "/login",
                Component: Login,
            },
            {
                path: "/register",
                Component: Register,
            }

        ]


    }
]);

export default router;