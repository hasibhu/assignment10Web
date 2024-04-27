import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Shared/Home";

import Login from "../components/LoginAndRegister/Login"
import Register from "../components/LoginAndRegister/Register"
import Root from "./Root";
import ErrorPage from "../Pages/ErrorPage";
import AllTouristSpot from "../AllTouristSpot/AllTouristSpot";
import AddLocation from "../components/Locations/AddLocation";
import MyListPage from "../components/Locations/MyListPage";
import UpdateLocation from "../components/Locations/UpdateLocation";
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
                path: '/addLocation',
                element: <AddLocation></AddLocation>
            },
            {
                path: '/myListPage',
                element: <MyListPage></MyListPage>
            },
            {
                path: '/updateLocation',
                element: <UpdateLocation></UpdateLocation>
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