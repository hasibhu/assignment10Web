import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Shared/Home";

import Login from "../components/LoginAndRegister/Login"
import Register from "../components/LoginAndRegister/Register"
import Root from "./Root";
import ErrorPage from "../Pages/ErrorPage";
import AllTouristSpot from "../AllTouristSpot/AllTouristSpot";
const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,

        children: [
            {
                path: '/',
                loader: () => fetch('/data.json'),
                element: <Home></Home>
                
            },
            {
                path: '/allTouristSpot',
                element: <AllTouristSpot></AllTouristSpot>
            },
           
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
        ]
    }
])

export default router;