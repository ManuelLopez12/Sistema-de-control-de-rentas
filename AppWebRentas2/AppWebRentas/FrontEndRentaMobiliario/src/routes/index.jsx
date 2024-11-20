import { createBrowserRouter } from "react-router-dom";

import MainLayout from "../components/layouts/MainLayout";
import { SimpleLayout } from "../components/layouts/SimpleLayout";
import { Login } from "../components/pages/Login";

export const Router = createBrowserRouter([

    {
        path:"/",
        element:<SimpleLayout/>,
        children:[

            {
                path:"/",
                element:<MainLayout/>,
            },
            {
                path:"/login",
                element:<Login/>
            },

        ]
    }

])