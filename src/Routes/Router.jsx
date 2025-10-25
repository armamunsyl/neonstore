import { createBrowserRouter } from "react-router"
import App from "../App";
import Layout from "../Layout/Layout";
import Navbar from "../Component/Navbar";
import { Children, Component } from "react";
import Home from "../Component/Home";
import Login from "../Component/Login";
import Register from "../Component/Register";
import MyProfile from "../Page/MyProfile";
import EsportsNews from "../Page/EsportsNews";
import GameDetails from "../Component/GameDetails";
import ErrorPage from "../Page/ErrorPage";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
    {
        path: "/",
        Component: Layout,
        errorElement: <ErrorPage></ErrorPage>,
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
            },
            {
                path: "/myprofile",
                Component: MyProfile,
            },
            {
                path: "/news",
                element: <PrivateRoute>
                    <EsportsNews></EsportsNews>
                </PrivateRoute>,
            },
            {
                path: "/games/:id",
                element: <PrivateRoute>
                    <GameDetails></GameDetails>
                </PrivateRoute>
            }

        ]


    }
]);

export default router;